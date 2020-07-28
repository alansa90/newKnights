const {Router} = require('express')

const router = Router()


router.route('/knights')
    .get((req,res)=>{
        res.send('knights')
    })

module.exports = router