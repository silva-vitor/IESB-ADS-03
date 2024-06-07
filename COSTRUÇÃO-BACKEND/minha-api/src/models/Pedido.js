const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        pedido:{
            type:String,
            required: true
        }, 
        funcinario:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'funcionario',
            required: true
    },
    cliente:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'cliente',
        required: true,

    },
    produto:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'produto',
        rerquired: true
    },
    },
    {
        timestamps: true
    }
    
)
const Pedido = mongoose.model('pedido', schema)

module.exports = Pedido