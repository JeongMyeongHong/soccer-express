const { addTodo, getTodo } = require("../controllers/todo.controller");
module.exports = x =>{ 
    x.app.post(`${x.url}/add`, addTodo)
    x.app.get(`${x.url}/get`, getTodo)
}