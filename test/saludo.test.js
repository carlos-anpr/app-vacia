import { test } from 'node:test';
import assert from 'node:assert/strict';
import { saludo } from '../src/saludo.js';

test('AC-1: saludo incluye el nombre', () => {
  assert.equal(saludo('Ana'), 'Hola, Ana');
});

test('saludo respeta las tildes', () => {
  assert.equal(saludo('Íñigo'), 'Hola, Íñigo');
});
