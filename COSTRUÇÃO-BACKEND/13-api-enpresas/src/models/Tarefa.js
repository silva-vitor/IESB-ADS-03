const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        dataInicio: {
            type: Date,
            required: true
        },
        dataFim: {
            type: Date,
            required: true 
        },
        funcionario: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Funcionario',
            required: false
        },
        projeto: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Projeto',
            required: false
        }
    }, {
        timestamps: true
    }
);

const Tarefa = mongoose.model('Tarefa', schema);

module.exports = Tarefa;
