// Import the assert module
const calculateNumber = require('./0-calcul');
const assert = require('assert');


describe('calculNumber', ()=>{
	it('should add 2 numbers correctly', ()=>{
		assert.strictEqual(calculateNumber(1, 3), 4);
		assert.strictEqual(calculateNumber(1, 3.7), 5);
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	})
})
