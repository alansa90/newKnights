const {Router} = require('express')

const router = Router()


router.use(require('./knights'))
router.use(require('./players'))

module.exports = router


