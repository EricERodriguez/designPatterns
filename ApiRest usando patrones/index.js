const express = require('express')
const services = require('./services')
const handlers = require('./handlers')
const parser = require('body-parser')

const app = express()

app.use(parser.urlencoded({extended:false}))


app.use(parser.json())
const port = 3000

app.get('/', handlers(services).get)
app.post('/', handlers(services).post)
app.put('/:id', handlers(services).put)
app.delete('/:id', handlers(services).delete)

app.listen(port, () => console.log(`example app listening on port ${port}`))