// ---Imports--- //
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { PORT } = process.env
const seed = require('./util/seed')
const { getAllProducts, getKookie, addOrder, getUser, getOrder } = require('./controllers/products')
const {login, register} = require('./controllers/auth')
const {Product, User, Order, Order_Item} = require('./util/models')
const path = require('path')

const db = require('./util/database')

const app = express()

// ---Middleware--- //
app.use(express.json())
app.use(cors())

app.use(express.static(path.resolve(__dirname, "../build")))

// ---Associations--- //
User.hasMany(Order)
Order.belongsTo(User)
Product.hasMany(Order_Item)
Order_Item.belongsTo(Product)
Order.hasMany(Order_Item)
Order_Item.belongsTo(Order)

// ---Endpoints--- //
app.get("/getAllProducts", getAllProducts)
app.get("/kookie/:id", getKookie)
app.post('/register', register)
app.post('/login', login)
app.post('/order', addOrder)
app.get('/user/:userId', getUser)


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})


// db
//     .sync()
// .sync({force: true})
// .then(() => seed())
app.listen(PORT, () => { console.log(`server up on ${PORT}`) })
