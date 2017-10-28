const assert = require('assert');
const plants = require('.');

test('random', function test() {
  assert.ok(plants.random());
  assert.ok(plants.random() !== plants.random());
});

test('seed random', function test() {
  assert.ok(plants.random('1') === plants.random('1'));
});
