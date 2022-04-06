exports.signUp = (req, res) => {
    const {name, id, pw, phoneNum} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`이름 : ${name}`)
    console.log(`아이디 : ${id}`)
    console.log(`비밀번호 : ${pw}`)
    console.log(`전화번호 : ${phoneNum}`)
    res.json(req.body)
}