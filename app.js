import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import db from './app/models/index.js';
// import tokenRouter from'./app/routes/token.js';
// import todoController from './app/controllers/todoController.js'
// import userController from './app/controllers/userController.js'


async function startServer() {
    dotenv.config();
    const app = express();
    const mongoUri = process.env.MONGO_URI;
    const port = process.env.PORT;
    app.use(express.static('public'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cors());
    // app.use('/', timeRouter);

    const corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    }

    
    db.mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('몽고 DB 연결 설정')
        }).catch(err => {
            console.error('몽고 DB와 연결 실패', err)
            process.exit()
        })
        app.listen(port, () => {
            console.log(`Server Started at ${new Date().toLocaleString()}`)
            console.log(`****************서버가 정상적으로 실행되고 있습니다*****************`)
        })
    app.get('/', (req, res) => {
        res.json({"현재 시간 : ": new Date().toLocaleString()})
    })
    app.get('/api/now', cors(corsOptions), (req, res) => {
        res.json({"now": new Date().toLocaleString()})
    })

}

startServer();