const router = require('express').Router();

const { RegisterUser } = require('../../../controller/createUser')

router.post('/registerUser', RegisterUser);

module.exports = router;