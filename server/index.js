// ---Imports--- //
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {PORT} = process.env
const seed = require('./util/seed')
const {getAllProducts} = require('./controllers/products')

const db = require('./util/database')

const app = express()

// ---Middleware--- //
app.use(express.json())
app.use(cors())

// ---Associations--- //


// ---Endpoints--- //
app.get("/getAllProducts", getAllProducts)


db
.sync()
// .sync({force: true})
// .then(() => seed())

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
