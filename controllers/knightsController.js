const db = require('../repository/db')
const {knightSchema} = require('../models/knight')
const { saveDB, getDB, getId } = require('../repository/db')
const { get } = require('mongoose')
const { response } = require('express')




//const knights = []


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
function saveKnight(knight){
    
    const kattr = knight.keyAttribute
    const attrs = knight.attributes[kattr]
    const weapon = knight.weapons
    const equipped= weapon.find(e => e.equipped === true)
    knight.exp = parseInt(10 + Math.floor(knight.age - 7) * Math.pow(22,1.45))
    knight.attack = 10 + mod(attrs) + equipped.mod
    /*const value = knightSchema.validateAsync(knight).value
    saveDB(value)
    return value*/
    
}
//Update knights
/*function updateKnight(knight){
    if(!knight.id) knight.id = sequence.id
    const knight_ = knights[knight.id] 
    knight_.nickname = knight.nickname
    return knight_
}
//list: knights
function getKnight(id){
    return knights[id] || {}
}
*/
function getKnights(){
    return getDB()
    
}/*
//Delete knights
function deleteKnight(id){
    const knight = knights[id]
    delete knights[id]
    return knight
}
*/
module.exports = {saveKnight,getKnights}

//, getKnight,deleteKnight,updateKnight