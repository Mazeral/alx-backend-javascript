// Import the assert module
const calculNumber = require('./0-calcul')
const assert = require('assert');


describe('calculNumber', ()=>{
	it('should add 2 numbers correctly', ()=>{
		assert.strictEqual(calculNumber(1, 2), 3);
		assert.strictEqual(calculNumber(-1, -3), -4);
		assert.strictEqual(calculNumber(0, 0), 0);
		assert.strictEqual(calculNumber(1.3, 5), 6.3);
		assert.strictEqual(calculNumber(3, 5.5), 8.5);
		assert.strictEqual(calculNumber(3.7, 6.3), 10);
	})
})
