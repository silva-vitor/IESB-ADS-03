const express = require('express')
const router = express.Router()

//Lista mokada
let listaPessoas = [{
    id:1,
    "nome": "vitor",
    "idade": 23,
    "email": "vitor@email.com",
    "telefone": "619955995595"
}]
//Read -> busca todos os produtos
router.get('/pessoas', (req,res)=>{
    res.json(listaPessoas)
})

//read -> busca pressoa pelo id

router.get('/pessoas/:id', (req, res)=>{
    const id = req.params.id
   const index=listaPessoas.findIndex(pessoa => pessoa.id == id)
    const pessoa = listaPessoas[index]
    res.json(pessoa)
})
//criat -> um produto
router.post('/pessoas',(req,res)=>{
    const novaPessoa = req.body
    const pessoa={
        id : listaPessoas.length +1,
        nome: novaPessoa.nome,
        idade: novaPessoa.idade,
        email: novaPessoa.email,
        telefone:novaPessoa.telefone


    }
   
    listaPessoas.push(pessoa)
    res.json("pessoa cadastrada")

})
// Atualizar pessoa
router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const atualizarPessoa = req.body;
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id);
    const pessoaAlterada = {
        id: id,
        nome: atualizarPessoa.nome,
        idade: atualizarPessoa.idade,
        email: atualizarPessoa.email,
        telefone: atualizarPessoa.telefone
    };
    listaPessoas[index] = pessoaAlterada;
    res.json("Pessoa alterada");
});

    //deletar ->
    router.delete('/pessoas/:id', (req, res )=>{
        const id = req.params.id
        const index = listaPessoas.findIndex(pessoa => pessoa.id ==id)
        listaPessoas.splice(index, 1)
        res.json("Pessaos deletada")
    })
module.exports = router