const {Router} = require('express')

const router = Router()


router.use('/knights', require('./knights'))
router.use(require('./players'))

module.exports = router


