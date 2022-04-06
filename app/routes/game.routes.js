const { Router } = require('express');
const express = require('express')
const gameRouter = express.Router()

gameRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

gameRouter.post(``, (req, res) => {
    res.json(req.body)
})

module.exports = gameRouter;