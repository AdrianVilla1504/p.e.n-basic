const { Router } = require('express');
const router = Router();
const { getUsers } = require('./users.controllers')

router.get('/', getUsers);

module.exports = router;
