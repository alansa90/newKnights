const { Router } = require('express')

const router = Router()


router.route('/players')
    .get((req,res)=>{
        res.send('players')
    })

module.exports = router