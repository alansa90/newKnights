const { Router } = require('express')
const { getKnights, saveKnights, getKnight,updateKnight,deleteKnights, getHeroes } = require('../controllers/knightsController')


const router = Router()

//list all knights
router.route('/')
    .get(getKnights)
    .post(saveKnights)
    
router.route('/:id')
    .put(updateKnight)
    .get(getKnight)
    .delete(deleteKnights)

module.exports = router