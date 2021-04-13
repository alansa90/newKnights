require('dotenv/config')
const express = require('express')


const app = express ()
app.use(require('./routes'))
app.set({ address: process.env.ADDRESS, port: process.env.PORT })
app.use(express.json())
app.use(express.urlencoded( { extended: true }))

process.on('uncaughtException', (err) => {
  console.log(err)
})

app.listen(() => { console.log(`Listen in port:${process.env.PORT}...`) })