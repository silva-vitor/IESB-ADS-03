const express = require('express')
const app = express()
const PORT = 3000

const DBconnection = require('./database/connection')

app.use(express.json())

const routes = require('./routes/router')
app.use(routes)


app.listen(PORT,()=>{
    
    DBconnection()
    console.log("Aplicação rodando ")
})