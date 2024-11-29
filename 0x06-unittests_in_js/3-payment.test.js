const sinon = require('sinon')
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const expect =  require('chai').expect;

describe('sendPaymentRequestApi test', () => {
	it('should check if sendPaymentRequestApi calls Utils.calculateNumber with the correct params', () =>{
		// The spy to calculateNumber
		const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

		// Calling sendPaymentRequestApi with params
		sendPaymentRequestToApi(100, 20)

		// Check if calculateNumber was called with the correct params
		expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20));

		// Restore the original function
		calculateNumberSpy.restore()
	})
})
