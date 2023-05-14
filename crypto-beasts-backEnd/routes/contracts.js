var express = require('express');
var router = express.Router();
const cardController = require('../controllers/cardController')
const nftController = require('../controllers/nftController')

/**
 * GET /cards
 * 
*/
router.get('/cards', cardController.getCards);

module.exports = router;