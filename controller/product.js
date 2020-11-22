const { AddProducts, ListProducts } = require('../services/ProductService');

module.exports = {
    AddProduct: async (req, res) => {
        const payload = req.body
        try {
            const customer = await AddProducts(payload)
            res.send({
                status: 200,
                data: customer
            })
        } catch (err) {
            res.send({
                status: 500,
                message: "something Went Wrong"
            })
        }
    },
    ListProduct: async (req, res) => {
        try {
            const customer = await ListProducts()
            res.send({
                status: 200,
                data: customer
            })
        } catch (err) {
            res.send({
                status: 500,
                message: "something Went Wrong"
            })
        }
    }
}