const expect =  require('chai').expect;
const calculateNumber = require('./2-calcul_chai')

describe('Test SUM', () => {
  it('should add 2 numbers correctly', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
});

describe('Test SUBTRACT', () => {
  it('should subtract 2 numbers correctly', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
});

describe('Test DIVIDE', () => {
  it('should divide 2 numbers correctly', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
});

describe('Test DIVIDE by zero', () => {
  it('should handle division by 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
