const mongoose = require('mongoose')

function validarId(req ,res ,next){
    const isValidad = mongoose.Types.ObjectId.isValid(req.params.id)
    if(isValidad){
        next()
    }else{
        res.status(400).json({ mensagem : "id invalido"})
    }
}
module.exports = {
    validarId
}


