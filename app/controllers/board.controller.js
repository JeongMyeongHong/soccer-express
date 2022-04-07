exports.write = (req, res) => {
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    res.status(200).json({'result':'ok'})
}