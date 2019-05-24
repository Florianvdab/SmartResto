var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/meals', function(req, res, next) {
  res.render('meals', { title: 'Express' });
});

router.get('/reservations', function(req, res, next) {
  res.render('reservations', { title: 'Express' });
});

router.get('/finished', function(req, res, next) {
  res.render('finished', { title: 'Express' });
});

module.exports = router;
