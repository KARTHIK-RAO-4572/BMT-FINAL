var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/ctrl')
/* GET home page. */
router.get('/',ctrl.LanderPage);

module.exports = router;
