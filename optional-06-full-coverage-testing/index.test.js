import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum should return 0 if one or both arguments are not numbers', (t) => {
  assert.strictEqual(sum('a', 2), 0, 'sum("a", 2) should return 0');
  assert.strictEqual(sum(2, 'b'), 0, 'sum(2, "b") should return 0');
  assert.strictEqual(sum('a', 'b'), 0, 'sum("a", "b") should return 0');
});

test('sum should return 0 if one or both arguments are negative', (t) => {
  assert.strictEqual(sum(-1, 2), 0, 'sum(-1, 2) should return 0');
  assert.strictEqual(sum(2, -1), 0, 'sum(2, -1) should return 0');
  assert.strictEqual(sum(-1, -1), 0, 'sum(-1, -1) should return 0');
});

test('sum should return the correct sum if both arguments are positive numbers', (t) => {
  assert.strictEqual(sum(1, 2), 3, 'sum(1, 2) should return 3');
  assert.strictEqual(sum(5, 10), 15, 'sum(5, 10) should return 15');
  assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) should return 0');
});
