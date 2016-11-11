var assert = require('chai').assert
var AppModel = require('../../models/appModel.js')
var appModel;

describe("#setKVPair", function() {
  before(function() {
    appModel = new AppModel
  })

  it("adds the key and value pairs into the requests", function() {
    var content = appModel.setKVPair({somekey: "somevalue"})
    assert.equal(content.somekey, "somevalue")
  })
})

describe("#getValue", function() {
  it("returns the value connected to the passed key", function() {
    appModel.setKVPair({somekey: "somevalue"})
    var returnValue = appModel.getValue("somekey")
    assert.equal(returnValue, "somevalue")
  })

  it("returns warning message if key not found", function() {
    var returnValue = appModel.getValue("otherkey")
    assert.equal(returnValue, "key not found")
  })
})
