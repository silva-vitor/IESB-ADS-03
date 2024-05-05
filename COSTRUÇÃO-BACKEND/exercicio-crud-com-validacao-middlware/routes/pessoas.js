const express = require ('express')

const router = express.Router()

let listaPessoas = [
    {
        "id": 1,
        "nome": "João",
        "idade": 20,
       "email": "joão@email.com",
        "telefone": "619265646565"
    }
]

//midslewares de validação 
// Validando se a pessoa existe
function validarPessoa(req, res, next){
    const id = req.params.id
    const pessoa = listaPessoas.find(produto =>produto.id == id )
    if(pessoa){
        req.pessoa = pessoa
        next()
    }else{
        return res.status(404).json("pessoa não encontrada !")
    }

}
// Validar os atributos do corpo 
function validarAtributos(req, res, next){
    const dadosRecebidos= req.body
    if (!dadosRecebidos.nome || !dadosRecebidos.idade || !dadosRecebidos.email || !dadosRecebidos.telefone) {
        return res.status(400).json("Nome, idade, email e telefone são obrigatórios.");
    } else {
        next();
    }
    
}


 //busca todos as pessoas

 router.get('/pessoas',(req, res)=>{
    return res.status(200).json(listaPessoas)
})

// Busca por produto especifico
router.get('/pessoas/:id', validarPessoa,(req, res)=>{
    res.json(req.pessoa)
})

// cadastra pessoa

router.post('/pessoas', validarAtributos,(req, res)=>{
    const dados = req.body

    const pessoa = {
        id: Math.round(Math.round() * 1000),
        nome: dados.nome,

        idade:dados.idade,

        email: dados.email,

        telefone: dados.telefone

    }
    listaPessoas.push(pessoa)

    res.status(200).json("Pessoa cadastrado com sucesso!",pessoa)
})
 // Altera pessoa
 router.put('/pessoas/:id', validarAtributos, validarPessoa, (req, res)=>{
    const id = req.params.id
    const novosDados= req.body

    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

    const pessoa = {
        id: Number(id),
        nome: novosDados.nome,
        idade:novosDados.idade,
        email: novosDados.email,
        telefone:novosDados.telefone
    }
    listaPessoas[index]=pessoa
    
    res.status(200).json("pessoa alterada com sucesso")
 })

 // excluir pessoa

 router.delete('/pessoas/:id', validarAtributos,(req, res)=>{
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    listaPessoas.splice(index,1)
    res.status(200).json("Pessoa excluida com sucesso")
 })

module.exports = router