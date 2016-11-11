process.env.NODE_ENV="test";

var app = require('../../app');
var Browser = require('zombie');
var http = require('http');

describe("main path", function() {
  beforeEach(function(){
    server = http.createServer(app).listen(4000);
    browser = new Browser({ site: 'http://localhost:4000'});
  });

  it("shows Hello World", function() {
    browser.visit("/").then(function() {
      browser.assert.text("h1", /Hello World/)
    })
  })
})
