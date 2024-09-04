const express = require('express')
const app = express()

app.get('/hello', function(req, res) {
    res.json({
        say : 'Hi !'
    })
})

app.get('/bye', function(req, res) {
    res.json({
        say : 'bye~'
    })
})

app.listen(8888)