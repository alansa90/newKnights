const mongoose = require('mongoose')
const {MONGOURI} = require('../lib/www')

mongoose.connect(MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false)

const knightSchema = new mongoose.Schema({
    
    name: String,
    nickname: { type : String, required : true},
    age: { type : Number, required : true},
    keyAttribute: { type : String, required : true},
    weapons:[{
        name: { type : String, required : true},
        mod: { type : Number, required : true},
        attr: { type : String, required : true},
        equipped: { type : Boolean ,required :true}
    }],
    attributes: {
        strength: { type : Number, required : true},
        dexterity: { type : Number, required : true},
        constitution: { type : Number, required : true},
        intelligence: { type : Number, required : true},
        wisdom: { type : Number, required : true},
        charisma: { type : Number, required : true}
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
    let id = knight.params.id
    let nickname = knight.body.nickname
    
        const k =  Knight.findByIdAndUpdate({_id:id}, {nickname:nickname}).catch(e=>console.log(e))
        return k
    
    
}

const deleteOne = (id) =>{
    const k = Knight.findByIdAndUpdate({_id:id},{heroes:true},{upsert:true}).catch(e=>console.log(e))
    return k
}

const findHero = async ()=>{
        const h = await Knight.find({heroes:true}).catch(e=> console.log(e))
        return h
    
}


module.exports = {insertKnight, findAllKnights, findOne,updateOne,deleteOne,findHero}