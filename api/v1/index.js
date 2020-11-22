const user = require('./user');
const customer = require('./customer');
const product = require('./product');
const transaction = require('./transaction');





module.exports = [...user, ...customer, ...product, ...transaction]