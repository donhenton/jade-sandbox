var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Main Page' , 'jsfile':'js/index_code.js'});
});

module.exports = router;
