const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({
    say : '안녕하세요'
  })
})

let nodejsbook = {
    title : 'Node.js 배워보자',
    price : 20000,
    description : '이 책 좋음 박정환이 지어서'
}

app.get('/products/1', function(req, res) {
    res.json(nodejsbook)
})

app.listen(8888)