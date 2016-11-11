process.env.NODE_ENV="test";

var app = require('../../app');
var Browser = require('zombie');
var http = require('http');

describe("main path", function() {
  before(function(){
    server = http.createServer(app).listen(4000);
    browser = new Browser({ site: 'http://localhost:4000'});
  });

  beforeEach(function(done) {
    browser.visit("/", done);
  })

  it("shows Hello World", function() {
    browser.assert.text("h1", /Hello World/);
  })
})

describe("set and get values", function() {
  beforeEach(function(done) {
    browser.visit("/set?somekey=somevalue", done);
  })

  it("set the value and store it in memory by using '/set' path", function() {
    browser.assert.text("h1", /"somekey":"somevalue"/);
  })
})
