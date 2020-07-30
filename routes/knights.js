const {Router} = require('express')
const bodyParser = require('body-parser')
const { getKnights, saveKnight } = require('../controllers/knightsController')

const router = Router()
router.use(bodyParser.json())


router.route('/knights')
    .get((req,res)=>{
        console.log(getKnights())
        
         
    })
    .post((req,res,next)=>{
        const {body = {}} = req
        saveKnight(body)
        res.redirect('/knights')
        
    })
    .put()
module.exports = router