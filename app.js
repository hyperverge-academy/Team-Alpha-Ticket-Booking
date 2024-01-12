const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes/health.route')
const createBusRoute= require('./routes/bus.route')
const bookingRouter = require('./routes/users.route')
const userModel = require("./Models/users.model")

app.use(cors())
app.use(bodyParser.json())
app.use(routes)
app.use(createBusRoute)
app.use(bookingRouter)

app.listen(port, async()=> {
    const registerAdminSucceeded = await userModel.registerAdmin()
    if(!registerAdminSucceeded){
        console.log("admin does not exist.")
        app.close()
    }
    console.log(`app is listening on ${port}`)
})