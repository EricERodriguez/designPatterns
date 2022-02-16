// patron inyeccion de dependencia, se basa en entregarle el control a una libreria que nosotros le vamos a inyectar

const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/', async(req,res)=> {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    res.send(data)
})

app.listen(port, () => console.log(`example app listening on port ${port}`))