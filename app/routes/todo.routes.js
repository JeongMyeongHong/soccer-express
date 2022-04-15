const { addTask } = require("../controllers/todo.controller");
module.exports = x =>{ 
    x.app.post(`${x.url}/add`, addTask)
}