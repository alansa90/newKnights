const express = require('express')
const home = require('./routes/index')

const app = express ()
app.use('/',home)

app.listen(3000, ()=>{console.log(`Listen in port 3000...`)})