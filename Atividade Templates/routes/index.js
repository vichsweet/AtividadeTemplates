var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', content: "" });
  console.log('Usuário entrou em Index')
});

module.exports = router;
