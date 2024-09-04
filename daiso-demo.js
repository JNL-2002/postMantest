const express = require('express')
const app = express()

let db = new Map ()

let notebook = {
    productName : "Notebook",
    price : 2000000
}

let chair = {
    productName : "Chiar",
    price : 100000
}

let cup = {
    productName : "Cup",
    price : 3000
}

var id = 1
db.set(id++, notebook)
db.set(id++, chair)
db.set(id++, cup)


app.get('/daiso/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)

    const daiso = db.get(id)
    if (daiso == undefined) {
        res.json({
            message : "찾으시는 물건이 없습니다!"
        })
    } else {
        res.json(daiso)
}
})

app.use(express.json())
app.post('/daiso', (req, res) => {
    db.set(id++, req.body)
    res.json({
        message : `${db.get(id-1).productName} 물건이 등록되었습니다.`
    })
})

app.get('/daiso', function (req, res){
    res.json({
        message : 'test'
    })
})

app.listen(8888)