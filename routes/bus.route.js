const express = require('express');
const router = express.Router();
const busController=require('../controllers/bus.controller')

router.post('/buses',busController.postingData)

module.exports =router