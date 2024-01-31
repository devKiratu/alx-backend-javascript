const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox
      .stub(Utils, 'calculateNumber')
      .returns(10);
    sandbox.stub(console, 'log');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('verify arguments', () => {
    it('should call Utils.calculateNumber with type == "SUM", a == 100, b == 20', () => {
      sendPaymentRequestToApi(100, 20);
      expect(Utils.calculateNumber.calledOnce).to.be.true;
      expect(Utils.calculateNumber.calledWithExactly('SUM', 100, 20)).to.be.true;
    });
  });

  describe('verify console output', () => {
    it('should log The total is: 10', () => {
      sendPaymentRequestToApi(100, 20);
      expect(Utils.calculateNumber.calledOnce).to.be.true;
      expect(Utils.calculateNumber.calledWithExactly('SUM', 100, 20)).to.be.true;
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWithExactly('The total is: 10')).to.be.true;
    });
  });
});
