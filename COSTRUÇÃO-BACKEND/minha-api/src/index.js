const express = require('express');
const app = express();
const PORT = 3000;

const DBconnection = require('./database/connection')
 
app.use(express.json());

const autenticarRoutes= require('./routes/autentificar.routes')
app.use(autenticarRoutes)

const {checarToken} = require('./validators/autenticacaoValidator')

const routes = require('./routes/routes')
app.use("/",checarToken,routes)



app.listen(PORT, () => {
   DBconnection()
    console.log("Aplicação rodando");
});
