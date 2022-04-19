const db = require('../models/index')
require("dotenv").config()
const jwt = require('jsonwebtoken')

const UserSchema = db.user
exports.signUp = (req, res) => {
    console.log(` 진행 4 : 노드 유저 가입 서버에 진입함 ${JSON.stringify(req.body)}`)
    new UserSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
}

const users = []

exports.login = (req, res) => {
    console.log(` 진행 4 : 노드 로그인 서버에 진입함 ${JSON.stringify(req.body)}`)
    // UserSchema.find({userid: req.params.userid, password: req.params.password})
    // .exec((err, user) => {
    //     if (err) return res.status(400).send(err)
    //     res.status(200).json({ success: true, user })
    // })

    const {id, password} = req.body;
    const user = users.find(u=>u.id === id);
    if(!user) {
        return res.status(400).json('아이디 없음');
    } else {
        const isEqualPw = (password == user.password)
        console.log(isEqualPw);
        if(isEqualPw) 
            return res.status(200).json({msg : "로그인 성공!",user});
        else 
            return res.status(404).json({msg : "로그인 실패"});
    }
}

exports.userList = (req, res) => {
    console.log(`######유저 컨트롤러 엑세스######`)
    UserSchema.find((err, users) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, users})
    })
}

exports.profile = (req, res) => {
    console.log(`### 유저 프로필 엑세스 ###`)
    UserSchema.find({userid: req.params.id})
    .exec((err, user) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, user })
    })
}