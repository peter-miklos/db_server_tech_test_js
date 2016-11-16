let express  = require('express');
    router   = express.Router();
    AppModel = require('../models/appModel.js');
let appModel;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { content: 'Hello World' });
});

router.get("/set", function(req, res, next) {
  appModel ? appModel : appModel = new AppModel;
  appModel.setKVPair(req.query)
  res.render("index", { content: JSON.stringify(req.query) })
})

router.get("/get", function(req, res, next) {
  appModel ? appModel : appModel = new AppModel;
  var value = appModel.getValue(req.query.key)
  res.render("index", { content: `return value: ${value}`})
})

module.exports = router;
