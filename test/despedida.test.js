import { test } from 'node:test';
import assert from 'node:assert/strict';
import { despedida } from '../src/saludo.js';

// Cubre AC-2, pero el criterio solo está en este comentario, no en el nombre del test
test('despedida incluye el nombre', () => {
  assert.equal(despedida('Ana'), 'Adiós, Ana');
});
