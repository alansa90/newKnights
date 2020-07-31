const mongoose = require('mongoose')
const {MONGOURI} = require('../lib/www')
const {knightSchema} = require('../models/KnightModel')

mongoose.connect(MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true})
const Knight = mongoose.model('knight', knightSchema)

const findAllKnights = async () =>{
    const res = await Knight.find()
    return res   
}

const insertKnight = async (knight)=>{
    const k  = new Knight(knight)
    await k.save()
       
}

const findOne = async (id) =>{
    const res = await Knight.findById(id)
    return res
}


module.exports = {insertKnight, findAllKnights, findOne}