const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;
  let consoleSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberSpy.restore();
    consoleSpy.restore();
  });

  describe('sendPaymentRequestToApi(100, 20)', () => {
    it('should call Utils.calculateNumber with type == "SUM", a == 100, b == 20', () => {
      sendPaymentRequestToApi(100, 20);
      expect(calculateNumberSpy.calledOnce).to.be.true;
      expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
    });
  });

  describe('verify logging', () => {
    it('should log The total is: 120', () => {
      sendPaymentRequestToApi(100, 20);
      expect(consoleSpy.calledOnce).to.be.true;
      expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
    });
  });
});
