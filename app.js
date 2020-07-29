const express = require('express')
const {PORT, ADDRESS} = require('./lib/www')


const app = express ()

app.use(require('./routes'))
app.set(PORT,ADDRESS)


app.listen((ADDRESS,PORT), ()=>{console.log(`Listen in address:${ADDRESS} and port:${PORT}...`)})