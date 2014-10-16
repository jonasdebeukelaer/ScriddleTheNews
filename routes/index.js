var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  var data = req.body
  var product = (parseInt(data.num1) + parseInt(data.num2)).toString()
  console.log(product)
  res.send(product)
});

module.exports = router;
