const express = require('express')
const app = express()
const port = 3035
const cors = require('cors')
app.use(express.json())
app.use(cors())
const configureDB = require('./config/databaseConfig')
const router = require('./config/routes')
configureDB()

app.use('/', router)

app.listen(port, function(){
    console.log('listening on port', port)
})