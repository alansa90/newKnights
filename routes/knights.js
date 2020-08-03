const {Router} = require('express')
const bodyParser = require('body-parser')
const { getKnights, saveKnights, getKnight,updateKnights,deleteKnights } = require('../controllers/knightsController')


// TODO: replace old controller function signature to the new one

const router = Router()
router.use(bodyParser.json())

//list knights
router.route('/')
    .get(getKnights)
    //insert knights
    .post(async(req,res,next)=>{
        const {body = {}} = req
        await saveKnights(body)
        return res.redirect('/knights')
    })
//edit knights
router.route('/:id')
    .put(async (req, res)=>{
    await updateKnights(req)
    res.redirect('/knights')
    
})
    .get(async(req,res)=>{
    const knight = await getKnight(req.params.id)
    res.send(knight)
})
    .delete(async(req, res)=>{
    deleteKnights(req.params.id)
    res.redirect('/knights')
})

deleteKnights
module.exports = router