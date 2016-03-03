var express = require('express');
var router = express.Router();

/* GET users page. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users Page' , 'jsfile':'users_code.js'});
});

module.exports = router;
