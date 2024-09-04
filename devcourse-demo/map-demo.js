let db = new Map()

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

db.set(1, notebook)
db.set(2, cup)
db.set(3, chair)

const express = require('express')
const app = express()

app.get('/:id', function (req, res) {
    
    let {id} = req.params
    id = parseInt(id)

    if (db.get(id) == undefined) {
        res.json({
            message : "찾으시는 물건이 없습니다!"
        })
    } else {
        product = db.get(id)
        product ["id"] = id //product.id = id

        res.json(product)
    }
  })

app.listen(8888)