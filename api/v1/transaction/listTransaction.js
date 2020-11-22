const router = require('express').Router();

const { ListTransaction } = require('../../../controller/transaction')

router.get('/listTransaction', ListTransaction);

module.exports = router;