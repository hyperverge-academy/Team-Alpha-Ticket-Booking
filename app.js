const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/health.route')
const createBusRoute= require('./routes/bus.route')

const app = express()
const port = 3000

app.listen(port,()=> {
    console.log(`app is listening on ${port}`)
})

app.use(bodyParser.json())

app.use(routes)

app.use(createBusRoute)