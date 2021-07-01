const mongoose = require('../data')
const Jogo = require('./Jogo')

const desenvolvedoraSchema = new mongoose.Schema({
    nome: String,
    jogo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogo'
    },
    fundacao: String,
    dono: String,
    pais: String
}, {timestamps: true})

const Desenvolvedora = mongoose.model('Desenvolvedora', desenvolvedoraSchema)

module.exports = Desenvolvedora