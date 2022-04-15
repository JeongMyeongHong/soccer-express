const db = require('../models/index')
const UserSchema = db.user
exports.signUp = (req, res) => {
    console.log(` 진행 4 : 노드 유저 가입 서버에 진입함 ${JSON.stringify(req.body)}`)
    new UserSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
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
    UserSchema.find({username: req.params.id})
    .exec((err, user) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, user })
    })
}