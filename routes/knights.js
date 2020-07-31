const {Router} = require('express')
const bodyParser = require('body-parser')
const { getKnights, saveKnights, getKnight } = require('../controllers/knightsController')

const router = Router()
router.use(bodyParser.json())
router.use('/knights/:id',async (req,res,next)=>{
    const knight = await getKnight(req.params.id)
    return res.send(knight)})
    
    router.route('/knights')
    .get(async(req,res)=>{
        res.send(await getKnights())        
    })
    .post(async(req,res,next)=>{
        const {body = {}} = req
        await saveKnights(body)
        return res
        .status(201)      
        .redirect('/knights')
    })
    
    module.exports = router