const { Router } = require('express')
const { getJson } = require('../controllers/readJsonController')

const router = Router()


router.route('/')
    .get(getJson)


module.exports = router