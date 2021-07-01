const express = require('express')
const router = express.Router()
const Desenvolvedora = require('../models/Desenvolvedora')


router.get('/', async (req, res, next) => {
    try{
        let filter = {}
        if(req.query.ano) filter.ano = req.query.ano

        const limit = Math.min(parseInt(req.query.limit), 10) || 10
        const skip = parseInt(req.query.skip) || 0
        let albuns = []
        albuns = await Desenvolvedora.find(filter).limit(limit).skip(skip)
        res.json(albuns)
    }catch (err){
        next(err)
    }
})


router.get('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        let desenvolvedora = await Desenvolvedora.findById(id).populate('desenvolvedora')
        if(!desenvolvedora){
            res.statusCode = 404
            throw new Error("O objeto procurado não foi encontrado")
        }
        res.json(desenvolvedora)
    } catch(err){
        next(err)
    }
})


router.post('/', async (req, res, next) => {
    try{
        const desenvolvedora = new Desenvolvedora(req.body)
        const resultado = await desenvolvedora.save()
        res.json(resultado)
    } catch(err){
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const alBody = req.body
        const resultado = await Desenvolvedora.findByIdAndUpdate(id, alBody)
        res.json(resultado)
    } catch (err){
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const resultado = await Desenvolvedora.findByIdAndDelete(id)
        res.json(resultado)
    } catch (err){
        next(err)
    }
})

module.exports = router