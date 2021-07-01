const express = require('express')
const router = express.Router()
const Jogo = require('../models/Jogo')
const axios = require('axios')

router.get('/', async (req, res, next) => {
    try{
        let filter = {}
        if(req.query.nota) filter.nota = req.query.nota

        const limit = Math.min(parseInt(req.query.limit), 100) || 100
        const skip = parseInt(req.query.skip) || 0
        let jogo = []
        jogo = await Jogo.find(filter).limit(limit).skip(skip)
        res.json(jogo)
    } catch (err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        let jogo = await Jogo.findById(id).populate('jogo')
        if(!jogo){
            res.statusCode = 404
            throw new Error("O objeto procurado não foi encontrado")
        }

        if(jogo.personagens){
            try{
                var personagens = await axios.get('http//localhost:8080/personagens/'+jogo.personagens)
                if (personagens.status === 200) {
                    jogo.personagens = personagens.data
                }
            } catch (err){
                console.log('f')
            }
        }
        res.json(jogo)
    } catch (err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const body = req.body
        const doc = new Jogo(body)
        await doc.save()
        res.json(doc)
    } catch (err){
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try{
        const body = req.body
        const id = req.params.id
        const doc = await Jogo.findByIdAndUpdate(id, body)
        res.json(doc)
    } catch (err){
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const doc = await Jogo.findByIdAndDelete(id)
        res.json(doc)
    } catch (err){
        next(err)
    }
})

module.exports = router