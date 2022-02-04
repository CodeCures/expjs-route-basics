var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.json(req.body);
});

router.put('/:id', function(req, res, next) {
  res.json(req.params);
});

router.delete('/:id', function(req, res, next) {
  res.json(req.params);
});

module.exports = router;
