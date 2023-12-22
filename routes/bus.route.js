const express = require('express');
const router = express.Router();
const busController=require('../controllers/bus.controller')

router.post('/buses',busController.busDetails)

module.exports =router