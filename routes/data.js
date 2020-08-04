const {Router} = require('express')
const bodyParser = require('body-parser')
const {getJson} = require('../controllers/readJsonController')

const router = Router()
router.use(bodyParser.json())


router.route('/')
    .get(getJson)


module.exports = router