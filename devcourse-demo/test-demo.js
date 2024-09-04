const express = require('express')
const app = express()

app.get('/test', function(req, res) {
    res.json({
        say : 'TEST'
    })
})

app.get('/test/1', function(req, res) {
    res.json({
        say : 'test1'
    })
})

app.listen(8888)