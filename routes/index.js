var express = require('express');
var router = express.Router();
var AppModel = require('../models/appModel.js')
var appModel;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { content: 'Hello World' });
});

router.get("/set", function(req, res, next) {
  appModel ? appModel : appModel = new AppModel;
  appModel.setKVPair(req.query)
  res.render("index", { content: JSON.stringify(req.query) })
})

module.exports = router;
