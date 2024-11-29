const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments and log the correct total', function () {
    // Stub `Utils.calculateNumber` to always return 10
    const calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on `console.log`
    const logSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(calculateStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore stubs and spies
    calculateStub.restore();
    logSpy.restore();
  });
});
