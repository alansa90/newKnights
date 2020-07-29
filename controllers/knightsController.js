const db = require('../repository/db')
const { saveDB, getDB, getid } = require('../repository/db')
const { get } = require('mongoose')


verificaID = () =>{
    const _id = getid()
    console.log(_id)
       if(_id){
           _id++
       }else{
           return sequence._id
       }
    
    
}

const sequence = {
    _id: 1,
    get id() {return this._id++}
}

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
    let id = getid()
    if(!id){
        knight._id = sequence._id
    }else{
        knight._id = id++
    }
    const kattr = knight.keyAttribute
    const attrs = knight.attributes[kattr]
    const weapon = knight.weapons
    const equipped= weapon.find(e => e.equipped === true)
    knight.exp = parseInt(10 + Math.floor(knight.age - 7) * Math.pow(22,1.45))
    knight.attack = 10 + mod(attrs) + equipped.mod
    saveDB(knight)
    return knight
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
    getDB()
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