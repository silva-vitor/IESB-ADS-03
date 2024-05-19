    const mongoose = require('mongoose')

    const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        cpf:{
            type:Number,
            required: true
        },
        email:{
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: true
        },
      
        telefone:{
            type: String,
            required: true
        }, 
         dataNacimento: {
            type: Date,
            required: true

        },
        dataContratada:{
            type: Date,
            requerid:true
        },
        genero:{
            type: String,
            required:true
        },
        endereco:{
            cep:String,
            uf:String,
            logradouro: String,
            localidade:String,
            bairro:String,
            numero:String,
            complemento: String,

            
        },
        
        cargo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cargo',
            required: false
        },
        departamento:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'departamento',
            required: false


        }
        
    },
    {
        timestamps: true
    }

 )

    const Funcionario = mongoose.model('funcionario',schema)

    module.exports = Funcionario