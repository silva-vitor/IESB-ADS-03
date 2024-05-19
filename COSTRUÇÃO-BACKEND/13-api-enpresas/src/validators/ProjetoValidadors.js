const yup = require('yup')

const schema = yup.object().shape({
    nome: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatorio '),

    descricao: yup 
        .string('Campo precisa ser uma texto')
        .required('Campo obrigatorio'),

    dataInicio: yup 
        .date('data invalida')
        .required('Campo obrigatorio '),
        
    dataFim: yup
        .date('data invalida')
        .required('Campo obrigatorio')
})

function projetoValidador(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            console.log(err)
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: errors
                }
            )
        })
}

module.exports = {
    projetoValidador
}