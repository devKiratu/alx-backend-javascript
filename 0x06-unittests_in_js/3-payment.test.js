const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('sendPaymentRequestToApi(100, 20)', () => {
    it('should call Utils.calculateNumber with type == "SUM", a == 100, b == 20', () => {
      sendPaymentRequestToApi(100, 20);
      expect(Utils.calculateNumber.calledOnce).to.be.true;
      expect(Utils.calculateNumber.calledWithExactly('SUM', 100, 20)).to.be.true;
    });
  });
});
