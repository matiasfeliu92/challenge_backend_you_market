const express = require('express')
const MutationController = require('../controllers/mutation.controller')
const router = express.Router()

const mutationController = new MutationController()

router.post('/has-mutation', mutationController.verifyMutation)

module.exports = router