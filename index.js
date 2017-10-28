const plants = require('./knownlist');
const seedrandom = require('seedrandom');
const memoize = require('lodash/memoize');

const cached = memoize(seedrandom);

function Plants(items) {
  this.items = items;
}

Plants.prototype.random = function random(seed) {
  return this.items[
    Math.floor(
      (seed === undefined ? Math.random() : cached(seed)) * this.items.length
    )
  ]
}

module.exports = new Plants(plants);
