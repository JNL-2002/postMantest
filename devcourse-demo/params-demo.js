const express = require('express')
const app = express()

app.get('/products/1', function(req, res) {
    res.json({
        num : 1
    })
})

app.get('/products/2', function(req, res) {
    res.json({
        num : 2
    })
})

app.get('/products/:n', function(req, res) {
    let number = parseInt(req.params.n)
        res.json({
            num : number
        })
})

app.get('/:nickname', function(req, res) {
        res.json({
            channel : req.params.nickname
        })
})

app.get('/watch', function(req, res) {
    const q = req.query
    res.json(q)
})

app.listen(8888)