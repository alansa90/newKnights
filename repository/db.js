global.db = require('./dbConnection')



const list = ()=>{
    global.db.findAll((e,docs)=>{
            if(e){return console.log(e)}
            return docs
        })
        
}

const save = (knight)=>{
    global.db.insert(knight,(err,result)=>{
        if(err) {return console.log(err)}
        return result
    })
}

module.exports = {save, list}