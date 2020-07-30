const mongoose = require('mongoose')
const {USERNAME, PASSWORD} = require('../lib/www')
const { response } = require('express')


const db_uri = 'mongodb+srv://'+USERNAME+':'+PASSWORD+'@cluster0.womts.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(db_uri)


const knightSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    age: Number,
    nickname: String,
    keyAttribute: String,
    weapons:[{
        name: String,
        mod: Number,
        attr: String,
        equipped: Boolean
    }],
    attributes:{
        strength: Number,
        dexterity: Number,
        constitution: Number,
        intelligence: Number,
        wisdom: Number,
        charisma: Number
    },
    exp: Number,
    attack: Number
},{colletion:'knight'},
)

const knights = mongoose.model('knight', knightSchema)

const getId = () =>{
    return knights.find({}).lean().countDocuments()
}

const getDB = () =>{
    return knights.find({}).lean()
      
    
}

const saveDB = (knight)=>{
 
}

module.exports = {saveDB, getDB,getId}