const { signUp } = require("../controllers/user.controller");
module.exports = (x) => x.app.post(`${x.url}/signUp`, signUp);