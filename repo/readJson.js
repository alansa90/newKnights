const fs = require('fs')
const csv = require('csv-parser')

const file = '/home/alan/Documentos/knights/newKnights/repo/relatorio.csv'
const dados = []

async function read(){
  await  fs.createReadStream(file)
        .pipe(csv({separator:';'}))
        .on('data',(data)=>dados.push(data))
        .on('end',()=>{
             console.log('close')
        })
    return dados
}
module.exports = read