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

describe("set values", function() {
  beforeEach(function(done) {
    browser.visit("/set?somekey=somevalue", done);
  })

  it("sets the value and store it in memory by using '/set' path", function() {
    browser.assert.text("h1", /"somekey":"somevalue"/);
  })
})

describe("get values", function() {
  beforeEach(function(done) {
    browser.visit("/set?somekey=somevalue");
    browser.visit("/get?key=somekey", done);
  })

  it("gets the already set value by using the proper name of the key", function() {
    browser.assert.text("h1", /return value: somevalue/)
  })


})

describe("get a non existing value", function() {
  beforeEach(function(done) {
    browser.visit("/get?key=key", done);
  })

  it("gets notice if the key is not available", function() {
    browser.assert.text("h1", /return value: key not found/)
  })
})
