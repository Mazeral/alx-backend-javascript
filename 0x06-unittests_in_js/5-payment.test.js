const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(() => {
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore console.log after each test
    consoleSpy.restore();
  });

  it('should verify that the console logs the string "The total is: 120"', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Check that console.log is called with the correct message
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true; // Ensure it was only called once
  });

  it('should verify that the console logs the string "The total is: 20"', () => {
    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Check that console.log is called with the correct message
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true; // Ensure it was only called once
  });
});
