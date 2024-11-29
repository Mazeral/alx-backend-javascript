const calculateNumber = require('./1-calcul')
const assert = require('assert');

describe('Test SUM', () =>{
	it('should add 2 numbers correctly', ()=>{
		assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
	})
})


describe('Test SUBTRACT', () =>{
	it('should subtract 2 numbers correctly', ()=>{
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
	})
})


describe('Test DIVIDE', () =>{
	it('should divide 2 numbers correctly', ()=>{
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
	})
})


describe('Test DIVIDE by zero', () =>{
	it('should handle division by 0', ()=>{
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
	})
})
