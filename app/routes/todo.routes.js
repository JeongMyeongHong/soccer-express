const { task } = require("../controllers/todo.controller");
module.exports = x =>{ 
    x.app.post(`${x.url}/list`, task)
}