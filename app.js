const express = require('express')
const router = require('./routes/index')

const app = express ()
app.use('/',router.get())
app.listen(3000, ()=>{console.log(`Listen in port 3000...`)})