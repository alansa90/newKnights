const mongoClient = require('mongodb').MongoClient
const {MONGOURL} = require('../lib/www')


const dbUrl = MONGOURL

mongoClient.connect(dbUrl, {useUnifiedTopology:true})
    .then(conn => global.conn = conn.db('knightsGame'))
    .catch(err => console.log(err))

const findAll = (callback) =>{
    global.conn.collection('knights').find({}).toArray(callback)
    
}

const insert = (knight, callback)=>{
    global.conn.collection('knights').insertOne(knight,callback)
}



module.exports = {insert, findAll}