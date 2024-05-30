//console.log("New CreativeApp");

require('dotenv').config()
const express = require('express')

const app = express()

const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/CreativeApp', (req, res) => {
    res.send('New Application with Express')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login at CreativeApp</h1>')
})

app.get('/CreativeApp2', (req, res) => {
    res.send("<h2>Creative App 2</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})