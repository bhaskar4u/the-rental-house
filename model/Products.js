const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    product_id: {
        type: Number,
        required: true
    },
    product_title: {
        type: String,
        required: true
    },
    quantity_total: {
        type: Number,
        required: true
    },
    quantity_booked: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)