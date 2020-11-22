const router = require('express').Router();

const { AddUser } = require('../../../controller/createUser')

router.post('/registerUser', AddUser);

module.exports = router;