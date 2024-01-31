const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('tests for sendPaymentRequestToApi', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.spy(console, 'log');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('inputs 100 and 20', () => {
    it('should log The total is: 120', () => {
      sendPaymentRequestToApi(100, 20);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWithExactly('The total is: 120')).to.be.true;
    });
  });

  describe('inputs 10 and 10', () => {
    it('should log The total is: 20', () => {
      sendPaymentRequestToApi(10, 10);
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWithExactly('The total is: 20')).to.be.true;
    });
  });
});
