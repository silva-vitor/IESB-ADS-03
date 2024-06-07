const express = require('express');
const app = express();
const PORT = 3000;

const DBconnection = require('./database/connection')
 
app.use(express.json());
const routes = require('./routes/routes')
app.use(routes)



app.listen(PORT, () => {
   DBconnection()
    console.log("Aplicação rodando");
});
