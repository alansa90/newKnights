const {Router} = require('express')
const knightsController = require('../controllers/knightsController')
const model = require('../models/knight')
const bodyParser = require('body-parser')
const { getKnights } = require('../controllers/knightsController')

const router = Router()
router.use(bodyParser.json())


router.route('/knights')
    .get((req,res)=>{
        let data = getKnights()
        res.send(data).json()
    })
    .post((req,res,next)=>{
        const {body = {}} = req
        const validateKnight = model.knightSchema.validate(body)
        const knight = knightsController.saveKnight(validateKnight.value)
        res.send(knight)
    })
    .put()
module.exports = router