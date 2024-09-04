const express = require('express')
const app = express()

let male = {
    Name : 'junghwan',
    age : '23'
}

let female = {
    Name : 'jungsun',
    age : '20'
}

app.get('/:nickname', function(req, res) {

    const {nickname} = req.params

        if (nickname == 'junghwan') {
            res.json(male)
        } else if (nickname == 'jungsun') {
            res.json(female)
        } else {
            res.json ({
                message : '누구세요??'
            })
        }
})


app.listen(8888)