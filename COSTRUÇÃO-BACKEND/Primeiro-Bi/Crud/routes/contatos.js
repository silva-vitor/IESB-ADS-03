//importar express
const express = require('express')
 //criar um router
const router = express.Router()

// Dados mocKados
//criar uma lista de contatos
let listaContatos =[]

//crud

//read busca todos os contatos
router.get('/contatos',(req ,res)=>{

    res.json(listaContatos)
});
//read busca de contato pelo indentificador
router.get ('/contatos/:id', (req, res)=>{
    const id = req.params.id
    const contato =listaContatos[id]
    res.json(contato)

})



//cadastra os contatos
router.post('/contatos', (req, res)=>{
    const contato = req.body
    listaContatos.push(contato.nome)

    res.status(201).json({mensagem: "Contato Cadastrado"})
})
//deletar contato pelo identificador
router.delete('/contatos/:id',(req, res)=>{
    const id = req.params.id
    listaContatos.splice(id, 1)
    res.json({mensagem: "Contato deletado"})
    //update atualizar contatos
    router.put('/contatos/:id', (req, res)=>{
        const id = req.params.id
        const contato = req.body
        listaContatos[id] = contato.nome
        res.json({mensagem: "Contato atualizado"})
    })
})
//exportar o router
module.exports = router