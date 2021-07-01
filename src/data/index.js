const mongoose = require('mongoose')
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const URL = 'mongodb+srv://Mestre:mestrefoda@cluster0.nhdkw.mongodb.net/Exercicio10?retryWrites=true&w=majority'


mongoose.connect(URL, options, function(err){
    if(!err){
        console.log('Conectado ao banco')
    }
})

module.exports = mongoose