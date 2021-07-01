const express = require('express')
const router = express.Router()
const routes = {
    desenvolvedoras: require('./desenvolvedoras'),
    jogos: require('./jogos')
}


router.use(express.json())


router.use('/desenvolvedoras', routes.desenvolvedoras)
router.use('/jogos', routes.jogos)

module.exports = router