const express = require('express')
const app = express()
const PORT = 8080

app.get('/', (req,res) => {
    res.send("app GET")
})

app.post('/', (req,res) => {
    res.send("app POST")
})

app.delete('/', (req,res) => {
    res.send("app DELETE")
})

app.patch('/', (req,res) => {
    res.send("app PATCH")
})

app.listen(PORT, () => {
    console.log(`APP online at port ${PORT}`)
})
