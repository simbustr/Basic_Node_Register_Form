const express = require('express')
const router = express.Router()
const user = require('../controller/user')


router.post('/',user.addUser)


module.exports = router