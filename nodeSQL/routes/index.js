var express = require('express');
var router = express.Router();
var config = require('../config');

// do some checkinf here to chech the default user profile
// ternary statement => MDN ternary
var toRender = (config.kidsmode) ? 'main_kids' : 'home';
// short to if else

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(toRender, {
    title: 'done ' ,
    message : "handlebars is awesome",
    mainpage : true,
    kidsmode : config.kidsmode
  });
});

module.exports = router;
