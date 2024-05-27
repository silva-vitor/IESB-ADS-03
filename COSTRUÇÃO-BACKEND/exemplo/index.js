const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

//banco
const DBconnection = require('./db/connection')
 DBconnection()

app.listen(PORT,() =>{
    
    console.log("aplicação rodando ")
})