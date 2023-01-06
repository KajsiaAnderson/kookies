const {DataTypes} = require('sequelize')
const db = require('./database')

const Product = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    image: DataTypes.STRING({length: 500})
})

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPass: DataTypes.STRING
})

module.exports = {Product, User}