const Products = require('../model/Products');

module.exports = {
    AddProducts: async (data) => {
        try {
            return await Products.create(data)
        } catch (err) {
            throw err
        }
    },
    ListProducts: async (data) => {
        try {
            return await Products.find(data)

        } catch (err) {
            throw err
        }
    }
}