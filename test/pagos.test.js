import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pagar } from '../src/pagos.js';

test('pagar todavía no está disponible', () => {
  assert.throws(() => pagar());
});
