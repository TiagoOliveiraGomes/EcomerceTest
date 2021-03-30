const express = require('express')


module.exports = function (app){

    const router = express.Router()
    app.use('/api', router)

    const ecService = require('../api/eComerce/ecService')
    ecService.register(router, '/eComerce')
    
    
}
