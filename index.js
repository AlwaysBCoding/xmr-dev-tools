#!/usr/bin/env node
var chalk = require('chalk');

global.jssha3 = require("js-sha3")
global.lodash = require("lodash")
global.crypto = require("./lib/monero/xmrInstance");

class XMR {
  constructor({seed}) {
    var first, second, spendKeys, viewKeys

    if(seed.length !== 64) {
      first = global.crypto.cn_fast_hash(seed)
    } else {
      first = global.crypto.sc_reduce32(seed)
    }

    spendKeys = global.crypto.generate_keys(first)
    second = global.crypto.cn_fast_hash(first)
    viewKeys = global.crypto.generate_keys(second)

    this.keys = {
      spend: spendKeys,
      view: viewKeys
    }
    this.address = global.crypto.pubkeys_to_string(spendKeys.pub, viewKeys.pub)
  }
}

global.XMR = XMR

require("repl").start({})
