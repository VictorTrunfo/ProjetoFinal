const mongoose = require('../data')

const jogoSchema = new mongoose.Schema({
    nome: String,
    lancamento : String,
    nota : Number
}, {timestamps: true})

module.exports = mongoose.model('Jogo', jogoSchema)