const { MadeTransactions, ListTransactions } = require('../services/TransactionService');

module.exports = {
    MadeTransaction: async (req, res) => {
        const payload = req.body
        try {
            const customer = await MadeTransactions(payload)
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
    ListTransaction: async (req, res) => {
        try {
            const customer = await ListTransactions()
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