const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
require('dotenv').config(); //busca as variáveis do env

// Conexão com MongoDB
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@banco01.tmztktw.mongodb.net/?retryWrites=true&w=majority`)
 .then(() => console.log("Conectado ao banco MongoDB"))
 .catch((err) => console.log("Erro ao conectar ao banco MongoDB:", err));

// Middleware para permitir o uso de JSON no corpo das solicitações
app.use(express.json());

// Definição do modelo para as tarefas
const Tarefa = mongoose.model('Tarefa', { nome: String });

// Rota para criar uma nova tarefa
app.post('/tarefas', async (req, res) => {
    try {
        const novaTarefa = new Tarefa({ nome: req.body.nome });
        const tarefaSalva = await novaTarefa.save();
        res.json(tarefaSalva);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar todas as tarefas
app.get('/tarefas', async (req, res) => {
    try {
        const tarefas = await Tarefa.find();
        res.json(tarefas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar uma tarefa pelo ID
app.get('/tarefas/:id', async (req, res) => {
    try {
        const tarefa = await Tarefa.findById(req.params.id);
        res.json(tarefa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar uma tarefa pelo ID
app.put('/tarefas/:id', async (req, res) => {
    try {
        const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, { nome: req.body.nome }, { new: true });
        res.json(tarefa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para excluir uma tarefa pelo ID
app.delete('/tarefas/:id', async (req, res) => {
    try {
        await Tarefa.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tarefa excluída com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log('Aplicação rodando na porta', PORT);
})

