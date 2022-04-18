const db = require('../models/index')
const TodoSchema = db.todo
exports.addTodo = (req, res) => {
    console.log(` 진행 4 : 노드 할 일 추가 서버에 진입함 ${JSON.stringify(req.body)}`)
    new TodoSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
}

exports.getTodo = (req, res) => {
    TodoSchema.find((err, todos) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, todos})
    })
}