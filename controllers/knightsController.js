const {knightSchema, updateSchema} = require('../models/knight')
const { listKnights, saveKnight, findKnight,updateKnight,deleteKnight } = require('../repository/db')


const mod = (keyattr) =>{
    if(keyattr>=0 && keyattr <=8){
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
//Create knights
function saveKnights(knight){  
    const kattr = knight.keyAttribute
    const attrs = knight.attributes[kattr]
    const weapon = knight.weapons
    const equipped= weapon.find(e => e.equipped === true)
    knight.exp = parseInt(10 + Math.floor(knight.age - 7) * Math.pow(22,1.45))
    knight.attack = 10 + mod(attrs) + equipped.mod
    const value = knightSchema.validate(knight).value
    saveKnight(value)  
}
//Update knights
function updateKnights(req){
    const validation = updateSchema.validate(req.body).value
    return updateKnight(req.params.id, validation)

}

function getKnight(id){
    return findKnight(id)

}

function getKnights(){
    return listKnights()
}
//Delete knights
function deleteKnights(id){
    return deleteKnight(id)
  
}

module.exports = {saveKnights,getKnights,getKnight,updateKnights,deleteKnights}

//, getKnight,deleteKnight,updateKnight