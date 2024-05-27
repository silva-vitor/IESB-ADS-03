const mongoose = require( 'mongoose')
const schema = new mongoose.Schema(
    {
        nome:{
            type: String,
            required: true
        },
       email:{
            type: String,
            required: true
        },
        telefone:{
            type: String,
            required: true

        },
        dataContratacao:{
            type: Date,
            required: true

        },
        dataNacimento:{
            type:Date,
            required: true

        },
        genero:{
            type: String,
            required: true

        },
        endereco:{
            cep: String,
            uf: String,
            logradouro: String,
            localidade:String,
            bairro: String,
            numero: String,
            complemento: String

        },
        cargo:{
            type:mongoose.SchemaTypes.ObjectId,
            ref: 'cargo',
            required: false

        },
        departamento:{
            type: mongoose.SchemaTypes.ObjectId,
            ref:'departamento',
            required: false

        }, 

    dataFim:{
        type: Date,
        required: true

    }
    },
    {
        timestamps: true
    }
)
const Funcionario = mongoose.model('funcionario', schema)

module.exports = Funcionario