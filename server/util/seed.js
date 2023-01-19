const {Product} = require('../util/models')

let allProducts = [
    {
        name: "chocolate chip",
        price: 1.25,
        description: "The og. The goat. The cookie of all cookies. This classic chocolate chip is made of butter, sugar, and chocolate chips.",
        quantity: 100,
        image: "https://images.unsplash.com/photo-1612845575953-f4b1e3d63160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1017&q=80"
    },
    {
        name: "peanut butter",
        price: 2.00,
        description: "Do you like peanut butter? Then this cookie is for you. Creamy peanut butter spread throughout this delicious cookie.",
        quantity: 100,
        image: "https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"
    },
    {
        name: "white chip",
        price: 1.50,
        description: "Dark chocolate molded around a gooey puddle of white chocolate filling. Yum yum yum.",
        quantity: 100,
        image: "https://images.unsplash.com/photo-1619149651177-b09092806f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvb2tpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
    },
    {
        name: "krinkle kookie",
        price: 1.75,
        description: "Baked to perfection and sprinkled with just the right amount of sugar. Mmmmm.",
        quantity: 100,
        image: "https://images.unsplash.com/photo-1593629718348-0b98ae35ad3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
]

const seed = async () => {
    await Product.bulkCreate(allProducts)
}

module.exports = seed