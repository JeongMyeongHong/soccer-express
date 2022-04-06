require('dotenv').config();
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const { port, MONGO_URI } = process.env;

app.use(express.static('public'))
app.use(express.urlencoded({ extended:true}))
app.use(express.json())
app.use(cors())

// require('./app/routes/board.routes')({url: '/api/admin', app})
require('./app/routes/basic.routes')({url: '/api/basic', app})
require('./app/routes/board.routes')({url: '/api/board', app})
// require('./app/routes/board.routes')({url: '/api/game', app})
// require('./app/routes/todo.routes')({url: '/api/todo', app})
require('./app/routes/users.routes')({url: '/api/user', app})

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e))
app.listen(port, () => {
  console.log(`Server Started at ${new Date().toLocaleString()}`)
})
// 윗 부분은 설정값, 아랫부분이 출력값이다. 
app.get('/', (req, res) => {
  res.json({"현재 시간 : " : new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions), (req, res) => {
  res.json({"now":new Date().toLocaleString()})
})


