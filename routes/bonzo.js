var express = require('express');
var router = express.Router();

/* GET bonzo page. */
router.get('/', function(req, res, next) {
  res.render('pages/bonzo', { title: 'Bonzo Page' , 'jsfile':'bonzo_code.js'});
});

module.exports = router;