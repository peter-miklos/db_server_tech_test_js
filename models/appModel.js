"use strict"

function AppModel() {
  this.requests = {};
}

AppModel.prototype = {
  setKVPair: function(params) {
    this.requests = Object.assign(this.requests, params)
    return this.requests
  }
}

module.exports = AppModel;
