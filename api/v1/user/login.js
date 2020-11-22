const router = require('express').Router();

const { Login } = require('../../../controller/auth')

router.post('/login', Login);

module.exports = router;