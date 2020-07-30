const {Router} = require('express')
const knightsController = require('../controllers/knightsController')
const bodyParser = require('body-parser')
const { getKnights } = require('../controllers/knightsController')

const router = Router()
router.use(bodyParser.json())


router.route('/knights')
    .get((req,res)=>{
        getKnights().exec((e,docs)=>{
            res.json(docs)
            res.end()

        })
    })
    .post((req,res,next)=>{
        const {body = {}} = req
        knightsController.saveKnight(body)

        res.sendStatus(201)
        
    })
    .put()
module.exports = router