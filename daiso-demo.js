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

app.get('/daiso', function (req, res){
    let daiso = {}
    db.forEach(function (value, key) {
        daiso[key] = value
    });

    res.json(daiso)
})

app.use(express.json())
app.post('/daiso', (req, res) => {
    db.set(id++, req.body)
    res.json({
        message : `${db.get(id-1).productName} 물건이 등록되었습니다.`
    })
})


app.delete('/daiso/:id', function (req, res){
    let {id} = req.params
    id = parseInt(id)
    
    let daiso = db.get(id)
    if (daiso == undefined){
        res.json({
            message : `삭제 하려는 ${id}번 물건이 없습니다.`
        })
    } else {
        let name = daiso.productName
        db.delete(id)
        res.json({
            message : `${name}가 정상적으로 삭제되었습니다.`
        })
    }
})

app.delete('/daiso', function(req, res){

    if (db.size >= 1) {
        db.clear()
        res.json({
            message : '전체 물건이 삭제되었습니다.'
        })
    } else {
        res.json({
            message : '삭제할 물건이 없습니다.'
        })
    }
})

app.put('/daiso/:id', function(req, res){
    let {id} = req.params
    id = parseInt(id)
    let daiso = db.get(id)
    let oldproductName = daiso.productName
    if (daiso == undefined){
        res.json({
            message : `삭제 하려는 ${id}번 물건이 없습니다.`
        })
    } else {
        let newProductname = req.body.productName

        daiso.productName = newProductname
        db.set(id, daiso)

        res.json({
            message : `${oldproductName}물건 이름이 ${newProductname}으로 변경되었습니다`
        })
        }
    })

app.listen(8888)