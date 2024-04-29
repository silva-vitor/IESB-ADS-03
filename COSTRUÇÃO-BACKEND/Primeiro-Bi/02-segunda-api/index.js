
const express = require('express');
const app = express()
const port = 3000

// MIddleware -> intermediario 
app.use((req, res, next )=>{
console.log("PASSOU NO INTERMEDIARIO")
console.log ("Data:" + Date.now());
next();
})
//intermediario que transforma body em json
app.use(express.json());

app.get('/',(req, res)=>{
    res.send("hello word");
})
app.post('/aluno',(req, res)=>{
    console.log(req.body);
    res.send("OK");
})


app.listen(port, ()=>{
    console.log("Aplicação iniciada em http://localhost:3000")
})