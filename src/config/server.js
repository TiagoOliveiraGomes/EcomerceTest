const express = require("express")
const app = express()
const port = 3003

app.listen(port, () =>{
    console.log(`Backend is running in port ${port} `)
})


const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json)


module.exports = app


