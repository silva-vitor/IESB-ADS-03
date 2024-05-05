const express = require('express');
const app = express();
const PORT = 3000;
const mongoose= require('mongoose');
require('dotenv').config();

//conexão com mongoDB
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
 
mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@banco01.tmztktw.mongodb.net/?retryWrites=true&w=majority&appName=banco01`)

.then(()=>console.log("conectado ao banco mongoDB"))
.catch((err)=> console.log("erro ao conectar ao banco mongoDB"))
//middleware
app.use(express.json());

// definição do modelo 
const pessoa = mongoose.model('pessoa', {nome: String});


// rotas

//criar
app.post('/pessoas', async( req, res )=>{
   
        const novaPessoa = new pessoa({nome: req.body.nome});
        const PessoaSalva = await novaPessoa.save();
        res.json(PessoaSalva)
    
})
//busca todas pessoas
app.get('/pessoas', async (req, res)=>{
   
        const pessoas = await pessoa.find();
        res.json(pessoas)
})

//busca pelo id 
app.get('/pessoas/:id', async (req, res) => {
    const pessoa = await Tarefa.findById(req.params.id)
    res.json(pessoa)
})
// atualizar pelo id 
app.put("/pessoas/:id", async(req,res)=>{
           const pessoa = await pessoa.findByIdAndUpdate(req.params.id, {nome: req.body.nome},{new: true})
            res.json(pessoa)
})
 // deletar pelo id 
 app.delete('/pessoas/:id', async (req, res)=>{
    await pessoa.findByIdAndDelete(req.params.id)
    res.json()
 })

 


// iniciar o servidor
app.listen(PORT,() =>{
    console.log("aplicação rodando na porta",PORT)
})