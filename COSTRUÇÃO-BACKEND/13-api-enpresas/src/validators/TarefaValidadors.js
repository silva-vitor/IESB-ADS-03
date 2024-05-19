const yup =require('yup')

const schema = yup.object().shape({
    titulo: yup
        .string('campo precisa ser um texto')
        .required('Campo obrigatorio'),

    descricao: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatorio'),

    dataInicia: yup
        .date('data invalida')
        .required('Campo obrigatorio'),

    dataFim: yup 
        .date('data invalida')
        .required('campo obrigatorio'),

    funcionario: yup
        .string('Campo precisa ser um texto'),

    projeto: yup 
        .string('Campo precisa ser um texto ')

})


function tarefaValidadors(req, res, next) {
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
    tarefaValidador: tarefaValidadors
}