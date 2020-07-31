const  mongoose = require('mongoose')

knightSchema = new mongoose.Schema({
    
    name: String,
    nickname: String,
    age: Number,
    keyAttribute: String,
    weapons:[{
        name: String,
        mod: Number,
        attr: String,
        equipped: Boolean
    }],
    attributes: {
        strength: Number,
        dexterity: Number,
        constitution: Number,
        intelligence: Number,
        wisdom: Number,
        charisma: Number
    },
    exp:Number,
    attack:Number
    
})


module.exports = {knightSchema}