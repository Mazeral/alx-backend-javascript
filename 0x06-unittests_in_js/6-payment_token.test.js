const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js')

describe('getPaymentTokenFromAPI', () => {
	it('should resolve with the correct value', async () => {
		const result = await getPaymentTokenFromAPI(true)
		expect(result).to.deep.equal({data: 'Successful response from the API'})
	})
})
