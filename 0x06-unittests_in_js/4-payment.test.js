const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateNumberStub;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    consoleSpy.restore();
    calculateNumberStub.restore();
  });

  describe('sendPaymentRequestToApi(100, 20)', () => {
    it('should call Utils.calculateNumber with type == "SUM", a == 100, b == 20', () => {
      sendPaymentRequestToApi(100, 20);
      expect(calculateNumberStub.calledOnce).to.be.true;
      expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;
    });
  });

  describe('verify logging', () => {
    it('should log The total is: 10', () => {
      sendPaymentRequestToApi(100, 20);
      expect(consoleSpy.calledOnce).to.be.true;
      expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;
    });
  });
});
