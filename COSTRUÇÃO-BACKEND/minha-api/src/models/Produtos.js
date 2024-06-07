const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome:{
        type:String,
        required:true
    },
    lote:{
        type:String,
        required:false
    },
    dataValidade:{
        type:Date,
        required:true
        },
       fornecedor:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'fornecedor',
            required: false

        },
},
{
    timeseries:true
}
)

const Produto = mongoose.model('produto',schema)

module.exports= Produto