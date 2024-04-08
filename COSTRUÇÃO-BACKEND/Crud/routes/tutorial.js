//configuranção
const express = require('express');
//criando um rotas e as logicas 
const router = express.Router();

router.get('/tutorial', (req , res)=>{
    res.send("tutorial get")
})

router.post('/tutotial', (req , res)=>{
    res.send("tutorial post")
})
router.put('/tutorial', (req , res)=>{
    res.send("tutorial put")
})
router.delete('/tutorial', (req , res)=>{
    res.send("tutorial delete")
})
//exporto o router
module.exports= router
//este router tambem e um middleware