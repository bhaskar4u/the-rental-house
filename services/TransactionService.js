const Transactions = require('../model/Transactions');

module.exports = {
    MadeTransactions: async (data) => {
        try {
            return await Transactions.create(data)
        } catch (err) {
            throw err
        }
    },
    ListTransactions: async (data) => {
        try {
            return await Transactions.find(data)

        } catch (err) {
            throw err
        }
    }
}