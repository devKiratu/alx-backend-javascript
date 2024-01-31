const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber(type, a, b) - performs SUM, SUBTRACT, or DIVIDE on rounded a and b values', () => {
  describe("calculateNumber('SUM', 1.4, 4.5)", () => {
    it('should return 6', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe("calculateNumber('SUBTRACT', 1.4, 4.5)", () => {
    it('should return -4', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe("calculateNumber('DIVIDE', 1.4, 4.5)", () => {
    it('should return 0.2', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });

  describe("calculateNumber('DIVIDE', 1.4, 0)", () => {
    it('should return Error', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe("calculateNumber('DIVIDE', 1.4, 0.4)", () => {
    it('should return Error', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });
  });

  describe("calculateNumber('SUBTRACT', 2.4399, 1.4577)", () => {
    it('should return 1', () => {
      assert.equal(calculateNumber('SUBTRACT', 2.4399, 1.4577), 1);
    });
  });

  describe("calculateNumber('SUM', -8.2, 4.5)", () => {
    it('should return -3', () => {
      assert.equal(calculateNumber('SUM', -8.2, 4.5), -3);
    });
  });

  describe("calculateNumber('SUM', -8.5, -4.5)", () => {
    it('should return -12', () => {
      assert.equal(calculateNumber('SUM', -8.5, -4.5), -12);
    });
  });

  describe("calculateNumber('SUM', -0.5, 0.5)", () => {
    it('should return 1', () => {
      assert.equal(calculateNumber('SUM', -0.5, 0.5), 1);
    });
  });

  describe("calculateNumber('SUBTRACT', -0.5, 0.5)", () => {
    it('should return -1', () => {
      assert.equal(calculateNumber('SUBTRACT', -0.5, 0.5), -1);
    });
  });

  describe("calculateNumber('DIVIDE', -0.5, 0.5)", () => {
    it('should return 0', () => {
      assert.equal(calculateNumber('DIVIDE', -0.5, 0.5), 0);
    });
  });
});
