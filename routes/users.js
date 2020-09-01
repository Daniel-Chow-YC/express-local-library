var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hello-world', function(req, res) {
  res.send('Hello World!');
});

module.exports = router;
