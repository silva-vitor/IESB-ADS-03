require ('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const app = express()

app.use(express.json())

app.get('/hello',(req,res)=>{
    res.json("hello")
})

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@banco01.tmztktw.mongodb.net/?retryWrites=true&w=majority&appName=banco01`)

.then(()=>console.log("Conectado ao meu MOngoDB!"))
.catch(err=> console.log ("erro ao conectar no meu MongoDB:",err))

  
app.listen(3000,()=>{
    console.log("api rodando ")
})   