var express = require('express');
var router = express.Router();
var homePageCtrrl = require('../controllers/homePage');

/* GET home page. */
router.get('/', homePageCtrrl.index);

module.exports = router;
