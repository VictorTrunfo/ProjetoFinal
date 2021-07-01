const Jogo = require('./models/Jogo')

const a = new Jogo({
    nome: "Jogo 01",
    lancamento : "28/06/2021",

})

a.save().then(function(){
    console.log('salvo')
})