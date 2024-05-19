const Tarefa = require('../models/Tarefa'); // Corrigir o caminho conforme necessário

async function create(req, res) {
    try {
        const tarefa = new Tarefa(req.body);
        const tarefaCriada = await tarefa.save();
        res.status(201).json(tarefaCriada);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar tarefa", error });
    }
}

async function getAll(req, res) {
    try {
        const tarefas = await Tarefa.find().populate(['funcionario', 'projeto']);
        res.json(tarefas);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao buscar tarefas", error });
    }
}

async function getById(req, res) {
    try {
        const tarefa = await Tarefa.findById(req.params.id).populate(['funcionario', 'projeto']);
        if (tarefa) {
            res.json(tarefa);
        } else {
            res.status(404).json({ mensagem: "Tarefa não encontrada!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao buscar tarefa", error });
    }
}

async function update(req, res) {
    try {
        const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (tarefaAtualizada) {
            res.json(tarefaAtualizada);
        } else {
            res.status(404).json({ mensagem: "Tarefa não encontrada!" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar tarefa", error });
    }
}

async function remove(req, res) {
    try {
        const tarefaExcluida = await Tarefa.findByIdAndDelete(req.params.id);
        if (tarefaExcluida) {
            res.json({
                mensagem: "Tarefa excluída com sucesso!",
                tarefaExcluida
            });
        } else {
            res.status(404).json({ mensagem: "Tarefa não encontrada" });
        }
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao excluir tarefa", error });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};

