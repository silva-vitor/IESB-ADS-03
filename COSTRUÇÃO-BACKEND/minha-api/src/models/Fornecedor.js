const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome:{
            type: String,
            required: true
        },
        email:{
            type:String,
            required: true
        },
        enpreza:{
            type: String,
            required: true
        },
        telefone:{
            type: String,
            required:true
        },
    },
    {
        timestamps: true
    }
)

 const Fornecedor = mongoose.model('fornecedor',schema)

 module.exports = Fornecedor