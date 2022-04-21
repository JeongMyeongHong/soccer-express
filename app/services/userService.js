import db from '../models/index.js'
import Repository from '../config/dbConfig.js'

export default function UserService() {
    const User = db.user;
    const dbo = new Repository();
    const dbConnect = dbo.getDb();
    return {
        join(req, res) {
            console.log(' ### 진행 4: 노드서버에 진입함 ' + JSON.stringify(req.body))
            new User(req.body).save(() => {
                res
                    .status(200)
                    .json({ok: 'ok'})
                console.log('회원가입 성공')
            })
        },
        login(req, res) {
            User
                .findOne(req.body)
                .exec((err, result) => {
                    if (result) {
                        console.log(` ### Login Success ###`)
                        res.send(`Login successed : ${req.body.userid}`);
                    } else {
                        console.log(` ### Login Failure ###`)
                        res.send("Login failed");
                    }
                });
        },
        list(_req, res) {
            User
                .find()
                .exec((err, users) => {
                    if (err) 
                        return res
                            .status(400)
                            .send(err)
                    res
                        .status(200)
                        .json({success: true, users})
                })
        },
        profile(req, res) {
            console.log(`### user profile access ### `)
            User
                .find({userid: req.params.id})
                .exec((err, user) => {
                    if (err) 
                        return res
                            .status(400)
                            .send(err)
                    res
                        .status(200)
                        .json({success: true, user})
                })
        }
    }
}
