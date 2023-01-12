// ---Imports--- //
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { SERVER_PORT } = process.env
const seed = require('./util/seed')
const { getAllProducts, getKookie } = require('./controllers/products')
const {login, register} = require('./controllers/auth')

const db = require('./util/database')

const app = express()

// ---Middleware--- //
app.use(express.json())
app.use(cors())

// ---Associations--- //


// ---Endpoints--- //
app.get("/getAllProducts", getAllProducts)
app.get("/kookie/:id", getKookie)
app.post('/register', register)
app.post('/login', login)




// db
//     .sync()
// .sync({force: true})
// .then(() => seed())
app.listen(SERVER_PORT, () => { console.log(`╭∩╮（︶︿︶）╭∩╮: ${SERVER_PORT}`) })
