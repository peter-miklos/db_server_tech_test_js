var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { content: 'Hello World' });
});

router.get("/set", function(req, res, next) {
  console.log(req.query)
  res.render("index", { content: JSON.stringify(req.query) })
})

module.exports = router;
