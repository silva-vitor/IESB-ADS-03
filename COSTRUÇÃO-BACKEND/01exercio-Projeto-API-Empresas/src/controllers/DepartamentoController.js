const Departamento = require('../models/Departamento');

async function create(req, res) {
    try {
        const departamento = new Departamento(req.body);
        const departamentoCriado = await departamento.save();
        res.status(201).json(departamentoCriado);
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
}

async function getAll(req, res) {
    try {
        const departamento = await Departamento.find();
        res.json(departamento);
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
}

async function getById(req, res) {
    try {
        const departamento = await Departamento.findById(req.params.id);
        if (departamento) {
            res.json(departamento);
        } else {
            res.status(404).json({ mensagem: "Cargo não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
}

async function update(req, res) {
    try {
        const departamentoAtualizado = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (departamentoAtualizado) {
            res.json(departamentoAtualizado);
        } else {
            res.status(404).json({ mensagem: "Cargo não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
}

async function remove(req, res) {
    try {
        const departamentoExcluido = await Departamento.findByIdAndDelete(req.params.id);
        if (departamentoExcluido) {
            res.json({ mensagem: "Cargo excluído com sucesso" });
        } else {
            res.status(404).json({ mensagem: "Cargo não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};