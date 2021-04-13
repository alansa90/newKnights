const { findAllKnights, insertKnight, findOne,updateOne,deleteOne, findHero } = require('../models/knights')


const mod = (keyattr) =>{
    if(keyattr >= 0 && keyattr <= 8){
        return keyattr - 2
    }else if(keyattr === 10 || keyattr === 9){
        return keyattr - 1
    }else if(keyattr === 11 || keyattr === 12){
        return keyattr - 0
    }else if(keyattr >= 13 && keyattr <= 15){
        return keyattr + 1
    }else if(keyattr >= 16 && keyattr <= 18){
        return keyattr + 2
    }else {
        return keyattr + 3
    }
}

async function saveKnights (req, res){  
    console.log('adasd')
    try {
        let { body = {} } = req
        const kattr = body.keyAttribute
        const attrs = body.attributes[kattr]
        const weapon = body.weapons
        const equipped= weapon.find(e => e.equipped === true)
        body.exp = parseInt(10 + Math.floor(body.age - 7) * Math.pow(22,1.45))
        body.attack = 10 + mod(attrs) + equipped.mod
        await insertKnight(body)  
        return res.redirect('/knights')
        
    } catch (err) {
        return `Erro: ${err}`
    }
}

async function updateKnight(req, res){
    try {
        const knight =  await updateOne(req)
        res.json(knight)
        
    } catch (err) {
        res.status(500).send(err.message)
    }
    
}

async function getKnight(req, res){
    try {
        const knight = await findOne(req.params.id)
        res.json(knight)
        
    } catch (err) {
        res.status(404).send(err.message)
        
    }
    
    
}

async function getKnights(req, res){
    try{
        if (req.query.filter){
            if(req.query.filter !== 'heroes'){
                const error = new Error('Impossivel filtrar')
                res.status(404).json(error.message)
            }else{
                const result = await findHero()
                res.json(result)
                
            }
        }else{
            const knights = await findAllKnights()
            res.json(knights)
        }
        
    }catch (err){
        res.status(404).send(err.message)
    }
    
    
}
//Delete knights
async function deleteKnights(req, res){
    try{
        const result = await deleteOne(req.params.id)
        res.json(result)
        
    }catch (err){
        return `Error: ${err}`
    }
    
}

module.exports = {
    saveKnights,
    getKnights,
    updateKnight,
    deleteKnights,
    getKnight
}