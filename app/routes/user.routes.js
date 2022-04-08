const { signUp, userList} = require("../controllers/user.controller");
module.exports = x =>{ 
    x.app.post(`${x.url}/signUp`, signUp)
    x.app.get(`${x.url}/list`, userList)
}