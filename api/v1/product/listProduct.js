const router = require('express').Router();

const { ListProduct } = require('../../../controller/product')

router.get('/listProduct', ListProduct);

module.exports = router;