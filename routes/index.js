var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello World' });
});

router.get("/set", function(req, res, next) {
  res.render("index")
})

module.exports = router;
