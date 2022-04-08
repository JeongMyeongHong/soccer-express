const db = require("../models")
const UserSchema = db.board

exports.write = (req, res) => {
    new UserSchema(req.body).save(() => {
        res.status(200).json({'result':'ok'})
    })
}

exports.read = (req, res) => {
    console.log(`######보드 컨트롤러 엑세스######`)
    UserSchema.find((err, boards) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, boards})
    })
}