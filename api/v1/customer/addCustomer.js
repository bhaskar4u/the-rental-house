const router = require('express').Router();

const { AddCustomer } = require('../../../controller/customer')

router.post('/addCustomer', AddCustomer);

module.exports = router;