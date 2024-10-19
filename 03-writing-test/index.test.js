import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { sum } from './index.js'; 

test('sum adds two numbers correctly', () => {
  assert.equal(sum(1, 2), 3);
  assert.equal(sum(-1, 1), 0);
  assert.equal(sum(-1, -1), -2);
});
