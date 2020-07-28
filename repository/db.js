const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/knights')


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
    }}, { _id: false },{colletion:'knight'},
)

const knights = mongoose.model('knight', knightSchema)



const getDB = () =>{
    knights.find()
}

const saveDB = (knight)=>{
    console.log(knight)
    let data = new knights(knight)
    data.save()

}

module.exports = {saveDB, getDB}