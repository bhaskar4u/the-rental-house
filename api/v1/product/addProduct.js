const router = require('express').Router();

const { AddProduct } = require('../../../controller/product')

router.post('/addProduct', AddProduct);

module.exports = router;