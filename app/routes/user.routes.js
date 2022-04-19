const { signUp, userList, profile, login} = require("../controllers/user.controller");
const { verifyToken } = require('../routes/middlewares');

module.exports = x =>{ 
    x.app.post(`${x.url}/signUp`, signUp)
    x.app.post(`${x.url}/login`, verifyToken, login)
    x.app.get(`${x.url}/list`, userList)
    x.app.get(`${x.url}/profile/:id`, profile)
}