const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.listen(port,()=> {
    console.log(`app is listening on ${port}`)
})

app.use(bodyParser.json())

const bookingRouter = require('./routes/users.route')
app.use(bookingRouter)

const routes = require('./routes/health.route')
app.use(routes)