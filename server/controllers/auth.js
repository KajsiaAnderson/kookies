require('dotenv').config()
const { SECRET } = process.env
const {User} = require('../util/models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createToken = (email, id) => {
    return jwt.sign(
        {
            email,
            id
        },
        SECRET,
        {
            expiresIn: '2 days'
        }
    )
}

module.exports = {
    register: async (req, res) => {
        try {
            const { firstname, lastname, email, password } = req.body
            const foundUser = await User.findOne({
                where: { email: email }
            })
            if (foundUser) {
                res.status(400).send('User already exists!')
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)
                const newUser = await User.create({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    hashedPass: hash
                })
                const token = createToken(newUser.dataValues.email, newUser.dataValues.id)
                console.log('new user', newUser)
                console.log('token', token)
                const exp = Date.now() + 1000 * 60 * 60 * 48
                res.status(200).send({
                    email: newUser.dataValues.email,
                    userId: newUser.dataValues.id,
                    token: token,
                    exp: exp
                })
            }
        } catch (error) {
            console.log('register error', error)
            res.sendStatus(400)
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const foundUser = await User.findOne({
                where: { email: email }
            })
            if (foundUser) {
                const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)

                if (isAuthenticated) {
                    const token = createToken(foundUser.dataValues.email, foundUser.dataValues.id)
                    const exp = Date.now() + 1000 * 60 * 60 * 48
                    res.status(200).send({
                        email: foundUser.dataValues.email,
                        userId: foundUser.dataValues.id,
                        token: token,
                        exp: exp
                    })
                } else {
                    res.status(400).send('Invalid log in')
                }
            } else {
                res.status(400).send('Email does not exist')
            }
        } catch (error) {
            console.log('login error', error)
            res.sendStatus(400)
        }
    }
}