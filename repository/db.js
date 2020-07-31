const db = require('./dbConnection')



const listKnights = async ()=>{
    try {
        const docs = await db.findAllKnights()
        return docs
    } catch (error) {
        console.log(error)
    }
    
}

const saveKnight = async(knight)=>{
    try{
        await db.insertKnight(knight)
    }catch (err){
        console.log(err)
    }
    
}

const findKnight = async (id)=>{
    try{
        const  knight = await db.findOne(id)
        return knight
    }catch (e){
        console.log(e)
    }
}

const updateKnight = async (id) =>{
    try {
        const knight = await db.updateOne(id)
        return knight
    }catch (err){
        console.log(err)
    }
}

module.exports = {saveKnight, listKnights,findKnight,updateKnight}