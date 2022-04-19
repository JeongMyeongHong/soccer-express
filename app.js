require('dotenv').config();
const cors = require('cors')
const express = require('express');
const app = express()
const tokenRouter = require('./app/routes/token');
app.use('/token', tokenRouter);
const { port, MONGO_URI } = process.env;


app.use(express.static('public'))
app.use(express.urlencoded({ extended:true}))
app.use(express.json())
app.use(cors())

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

const APP = './app/routes'
const nodes = ['basic','board','user','todo']
for(const leaf of nodes){
  require(`${APP}/${leaf}.routes`)({url:`/api/${leaf}`,app})
}

const db = require('./app/models/index')
db.mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('몽고 DB 연결 설정')
  })
  .catch(err => {
    console.error('몽고 DB와 연결 실패', err)
    process.exit()
  })
app.listen(port, () => {
  console.log(`Server Started at ${new Date().toLocaleString()}`)
  console.log(`****************서버가 정상적으로 실행되고 있습니다*****************`)
})
app.get('/', (req, res) => {
  res.json({"현재 시간 : " : new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions), (req, res) => {
  res.json({"now":new Date().toLocaleString()})
})

