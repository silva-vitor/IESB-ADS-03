//configuranção
const express = require('express');
//criando um rotas e as logicas 
const router = express.Router();

router.get('/subrota', (req , res)=>{
    res.send("subrota get")
})

router.post('/subrota', (req , res)=>{
    res.send(" subrota post")
})
router.put('/subrota', (req , res)=>{
    res.send("subrota put")
})
router.delete('/subrota', (req , res)=>{
    res.send("subrota delete")
})
//exporto o router
module.exports= router
//este router tambem e um middlewar