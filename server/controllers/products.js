const { Product } = require('../util/models')

module.exports = {
    // getAllProducts: (req, res) => {
    //     Product.findAll()
    //     .then((dbRes) => {
    //         res.status(200).send(dbRes)
    //     })
    //     .catch((err) => console.log("error getting all products", err))
    // }
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
    }
}