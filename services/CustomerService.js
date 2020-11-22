const Customers = require('../model/Customers');

module.exports = {
    CustomerSave: async (data) => {
        try {
            return await Customers.create(data)
        } catch (err) {
            throw err
        }
    },
    CustomerList: async (data) => {
        try {
            return await Customers.find(data)
        } catch (err) {
            throw err
        }
    },
}