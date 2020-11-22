const router = require('express').Router();

const { ListCustomer } = require('../../../controller/customer')

router.get('/listCustomer', ListCustomer);

module.exports = router;