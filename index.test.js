const assert = require('assert');
const plants = require('.');

test('random', function test() {
  assert.ok(plants.random());
  assert.ok(plants.random() !== plants.random());
});

test('seed random', function test() {
  assert.ok(plants.random('11'));
  assert.ok(plants.random('11') === plants.random('11'));
});
