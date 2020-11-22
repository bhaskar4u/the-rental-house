const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    transation_id: {
        type: String,
        required: true
    },
    transation_date_time: {
        type: Date,
        required: true
    },
    customer_id: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
    transation_type: {
        type: String,
        enum: ['out', 'in'],
        default: 'out',
        required: true
    },
    quantity: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Transaction', transactionSchema)