const mongoose = require('mongoose');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

// Extrai as variáveis de ambiente
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

function main() {
    // Conecta ao banco de dados MongoDB usando as variáveis de ambiente
    mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=banco01`)
        .then(() => console.log("Conectado ao banco de dados MongoDB"))
        .catch(error => console.log("Erro ao conectar ao banco de dados:", error));
}

module.exports = main;