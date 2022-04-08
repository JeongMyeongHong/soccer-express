const db = require('../models/index')
const UserSchema = db.user
exports.signUp = (req, res) => {
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