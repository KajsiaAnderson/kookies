const {Product} = require('../util/models')

let allProducts = [
    {
        name: "chocolate chip",
        price: 1.50,
        description: "the og",
        quantity: 100,
        image: "https://images.unsplash.com/photo-1612845575953-f4b1e3d63160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1017&q=80"
    },
    {
        name: "oreo",
        price: 2.00,
        description: "oreo. mmm.",
        quantity: 100,
        image: "https://images.unsplash.com/photo-1531257243018-c547a2e35767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80"
    },
    {
        name: "sprinkle kookie",
        price: 1.50,
        description: "sprinkle some of that on",
        quantity: 100,
        image: "https://images.unsplash.com/photo-1619149651177-b09092806f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvb2tpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
    },
    {
        name: "kookie monster",
        price: 1.75,
        description: "yum yum yum",
        quantity: 100,
        image: "https://images.unsplash.com/photo-1593629718348-0b98ae35ad3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
]

const seed = async () => {
    await Product.bulkCreate(allProducts)
}

module.exports = seed