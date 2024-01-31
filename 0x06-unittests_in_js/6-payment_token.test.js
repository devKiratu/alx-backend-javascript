const getPaymentTokenFromAPI = require('./6-payment_token');

const expect = require('chai').expect;

describe('tests for getPaymentTokenFromAPI', () => {
  describe('successful call', () => {
    it('should return data', (done) => {
      getPaymentTokenFromAPI(true).then((data) => {
        expect(data).to.deep.equal({ data: 'Successful response from the API' });
      }).finally(() => {
        done();
      });
    });
  });
});
