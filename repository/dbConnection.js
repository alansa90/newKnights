const mongoose = require('mongoose')
const {MONGOURI} = require('../lib/www')
const {knightSchema} = require('../models/KnightModel')
const { ReplSet } = require('mongodb')

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

const updateOne = async (id,nick) =>{
    const k = await Knight.findById(id)
    const res = await Knight.updateOne({_id:k.id}, {nickname:nick.nickname})
    k.save()
    return res
}

const deleteOne = async(id) =>{
    const res = await Knight.deleteOne({_id:id})
    return res
}

module.exports = {insertKnight, findAllKnights, findOne,updateOne,deleteOne}