"use strict"

class AppModel{
  constructor() {
    this.requests = {};
  }
  setKVPair(params) {
    return Object.assign(this.requests, params)
  }
  getValue(key) {
    return this.requests[key] ? this.requests[key] : "key not found"
  }
}

module.exports = AppModel;
