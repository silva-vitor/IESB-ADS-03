const express = require ('express')
const app = express()
const DBconnection =require ('./db/connection')

const routes = require ('./routes/routes')
const PORT = 3000

app.use(express.json())


app.use(routes)


app.listen(PORT,()=>{
DBconnection()
   
    console.log("aplicação rodando na porta")
})




