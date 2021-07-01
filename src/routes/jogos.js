const express = require('express')
const router = express.Router()
const Jogo = require('../models/Jogo')

router.get('/', async (req, res, next) => {
    try{
        const doc = await Jogo.find()
        res.json(doc)
    } catch (err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const doc = await Jogo.findById(id)
        res.json(doc)
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