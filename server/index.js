require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {PORT} = process.env

const {sequelize} = require('./util/database')

const app = express()

app.use(express.json())
app.use(cors())

sequelize.sync()
.then(() => {
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
})
.catch(err => {
    console.log(err)
})