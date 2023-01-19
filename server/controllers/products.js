const { Product, User, Order, Order_Item } = require('../util/models')

module.exports = {
    getAllProducts: async (req, res) => {
        try {
            let products = await Product.findAll()
            console.log('products', products);
            res.status(200).send(products)
        } catch {
            res.status(400).send("error getting all products")
        }
    },

    getKookie: async (req, res) => {
        try {
            const {id} = req.params
            const kookie = await Product.findAll({
                where: {id: id}
            })
            res.status(200).send(kookie)
        } catch {
            res.status(400).send("error getting kookie detail")
        }
    },

    addOrder: async (req, res) => {
        try {
            const {userId, totalAmount, items} = req.body;
            console.log(userId, totalAmount, items)
            let newOrder = await Order.create({
                userId,
                totalAmount: totalAmount
            });
            console.log('hit')
            items.forEach(async product => {
                console.log(product)
                await Order_Item.create({
                    orderId: newOrder.id,
                    productId: product.id,
                    amount: product.amount,
                    name: product.name,
                    price: product.price
                })
            })
            res.sendStatus(200);
        } catch (err) {
            console.log(err)
            res.status(400).send("Problem adding order", err);
        }
    },

    getUser: async (req, res) => {
        try {
            const{userId} = req.params
            const user = await Order.findAll({
                where: {userId: userId},
                include: [User, {
                    model: Order_Item,
                }]
            })
            res.status(200).send(user)
        } catch {
            res.status(400).send("error getting user detail")
        }
    }
}