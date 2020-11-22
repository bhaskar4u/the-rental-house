const { CustomerSave, CustomerList } = require('../services/CustomerService');

module.exports = {
    AddCustomer: async (req, res) => {
        const payload = req.body
        try {
            const customer = await CustomerSave(payload)
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
    ListCustomer: async (req, res) => {
        try {
            const customer = await CustomerList()
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