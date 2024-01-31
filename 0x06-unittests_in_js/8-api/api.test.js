const request = require('request');
const expect = require('chai').expect;

describe('Index Page', () => {
  const url = 'http://localhost:7865';

  describe('Correct status code', () => {
    it('should return 200', (done) => {
      request(url, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
      });
      done();
    });
  });

  describe('Correct result', () => {
    it('should return Welcome to the payment system', (done) => {
      request(url, (err, res, body) => {
        expect(res.body).to.equal('Welcome to the payment system');
      });
      done();
    });
  });
});
