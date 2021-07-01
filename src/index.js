const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const routes = require('./routes')

app.use('/api', routes)
app.use(function(err, req, res, next){
    if(res.statusCode == 200){
        res.statusCode = 500
    }
    res.json({erro: err.message})
})

app.listen(PORT, function(){
    console.log('Servidor foi iniciado na porta ' + PORT)
})