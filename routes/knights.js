const {Router} = require('express')
const bodyParser = require('body-parser')
const { getKnights, saveKnights, getKnight,updateKnights,deleteKnights } = require('../controllers/knightsController')


const router = Router()
router.use(bodyParser.json())

//list by id
router.route('knights/:id').get(async(req,res)=>{
     const knight = await getKnight(req.params.id)
    res.send(knight)
})

//list knights
router.route('/knights').get(async(req,res)=>{
    res.send(await getKnights())        
})
//insert knights
router.route('/knights').post(async(req,res,next)=>{
    const {body = {}} = req
    await saveKnights(body)
    return res.redirect('/knights')
})
//edit knights
router.route('/knights/edit/:id')
    .put(async (req, res)=>{
    
    await updateKnights(req)
    return res.redirect('/knights')
})
    .get(async(req,res)=>{
        const knight = await getKnight(req.params.id)
       res.send(knight)
})

//delete knights
router.route('/knights/delete/:id').delete(async(req, res)=>{
    deleteKnights(req.params.id)
    res.redirect('/knights')
})

deleteKnights
module.exports = router