const {read} = require('../repo/readJson')



async function getJson(req,res){
        console.log(read())
        const json = await read()
        console.log(json)
        res.json(json)
}

module.exports ={getJson}