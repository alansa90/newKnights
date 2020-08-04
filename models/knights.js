const mongoose = require('mongoose')
const {MONGOURI} = require('../lib/www')

mongoose.connect(MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false)

const knightSchema = new mongoose.Schema({
    
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
    attack:Number,
    heroes:Boolean
    
})

const Knight = mongoose.model('knight', knightSchema)

const findAllKnights =  () =>{
    const k =  Knight.find()
    return k   
}

const insertKnight =  (knight)=>{
    const k  = new Knight(knight)
    k.save()
    return k
       
}

const findOne =  (id) =>{
    const k =  Knight.findById(id)
    return k
}

const updateOne =  (knight) =>{
    const k =  Knight.findByIdAndUpdate({_id:knight.params.id}, {nickname:knight.body.nickname})
    return k
}

const deleteOne = (id) =>{
    const k = Knight.findByIdAndUpdate({_id:id},{heroes:true},{upsert:true})
    return k
}

const findHero = (hero)=>{
    const h = Knight.find({heroes:true})
    return h
}


module.exports = {insertKnight, findAllKnights, findOne,updateOne,deleteOne,findHero}