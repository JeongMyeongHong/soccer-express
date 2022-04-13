const db = require('../models/index')
const TodoSchema = db.todo
exports.task = (req, res) => {
    new TodoSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
}