const express = require('express');
const router = express.Router();
const busController=require('../controllers/bus.controller')

router.post('/buses',busController.busDetails)
router.get('/buses', busController.allBusesData)

module.exports =router