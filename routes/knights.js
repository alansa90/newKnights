const {Router} = require('express')
const bodyParser = require('body-parser')
const { getKnights, saveKnights, getKnight } = require('../controllers/knightsController')
const { put } = require('./players')
const { updateKnight } = require('../repository/db')
const knight = require('../models/knight')

const router = Router()
router.use(bodyParser.json())
// router.use('/knights/:id',async (req,res)=>{
//     const knight = await getKnight(req.params.id)
//     res.send(knight)
// })
// router.route('knights/edit')
// .get('/:id',async(req,res)=>{
//     const knight = await getKnight(req.params.id)
//     res.send(knight)
// })
// .put('/:id',async (req,res)=>{
//     const update = await updateKnight(req.params.id)
//     res.send(knight)
// })

router.route('/knights')
.get(async(req,res)=>{
    res.send(await getKnights())        
})
router.route('/knights').post(async(req,res,next)=>{
    const {body = {}} = req
    await saveKnights(body)
    return res
    .status(201)      
    .redirect('/knights')
})
router.route('/knights/:id').put(async (req, res)=>{
    console.log('@@@@@@@', 'chegou')
})

module.exports = router