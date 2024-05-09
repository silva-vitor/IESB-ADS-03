const mongoose= require ('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preço:{ 
        type: Number,
        required:true
    },
    tipe:{
        type:String,
        required:true
    },
    tag:{
        type: String,
        required: false

    }
})
const Produto = mongoose.model('produto', schema)
module.exports.Produto

