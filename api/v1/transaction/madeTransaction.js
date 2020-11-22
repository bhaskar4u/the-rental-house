const router = require('express').Router();

const { MadeTransaction } = require('../../../controller/transaction')

router.post('/madeTransaction', MadeTransaction);

module.exports = router;