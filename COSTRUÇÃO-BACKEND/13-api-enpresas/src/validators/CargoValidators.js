const yup = require('yup');

const cargoSchema = yup.object().shape({
    nome: yup
        .string('Campo precisa ser um texto')
        .required('Campo obrigatório'),
    descricao: yup
        .string(),
    salario: yup
        .number('Campo precisa ser número')
        .min(1412, 'Precisa ser maior do que o salário mínimo')
        .required('Campo obrigatório')
});

function cargoValidador(req, res, next) {
    cargoSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => ({
                campo: e.path,
                erros: e.errors
            }));

            res.status(400).json({
                mensagem: "Falha na validação dos campos",
                erros: errors
            });
        });
}

module.exports = {
    cargoValidador
};
