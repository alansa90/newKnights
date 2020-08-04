const {Router} = require('express')
const bodyParser = require('body-parser')
const { getKnights, saveKnights, getKnight,updateKnight,deleteKnights, getHeroes } = require('../controllers/knightsController')


// TODO: replace old controller function signature to the new one

const router = Router()
router.use(bodyParser.json())

//list knights
router.route('/')
    .get(getKnights)
    .post(saveKnights)
    
router.route('/:id')
    .put(updateKnight)
    .get(getKnight)
    .delete(deleteKnights)


module.exports = router