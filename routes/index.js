const {Router} = require('express')

const router = Router()


router.route()
    .get('/', (req,res)=>{
        res.send('ok')
    })
    .all('/',(req,res)=>{
        res.send('ok')
    })




module.exports = router


