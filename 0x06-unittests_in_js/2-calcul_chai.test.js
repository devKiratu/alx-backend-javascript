const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber(type, a, b) - performs SUM, SUBTRACT, or DIVIDE on rounded a and b values', () => {
  describe("calculateNumber('SUM', 1.4, 4.5)", () => {
    it('should return 6', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe("calculateNumber('SUBTRACT', 1.4, 4.5)", () => {
    it('should return -4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe("calculateNumber('DIVIDE', 1.4, 4.5)", () => {
    it('should return 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe("calculateNumber('DIVIDE', 1.4, 0)", () => {
    it('should return Error', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe("calculateNumber('DIVIDE', 1.4, 0.4)", () => {
    it('should return Error', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });
  });

  describe("calculateNumber('SUBTRACT', 2.4399, 1.4577)", () => {
    it('should return 1', () => {
      expect(calculateNumber('SUBTRACT', 2.4399, 1.4577)).to.equal(1);
    });
  });

  describe("calculateNumber('SUM', -8.2, 4.5)", () => {
    it('should return -3', () => {
      expect(calculateNumber('SUM', -8.2, 4.5)).to.equal(-3);
    });
  });

  describe("calculateNumber('SUM', -8.5, -4.5)", () => {
    it('should return -12', () => {
      expect(calculateNumber('SUM', -8.5, -4.5)).to.equal(-12);
    });
  });

  describe("calculateNumber('SUM', -0.5, 0.5)", () => {
    it('should return 1', () => {
      expect(calculateNumber('SUM', -0.5, 0.5)).to.equal(1);
    });
  });

  describe("calculateNumber('SUBTRACT', -0.5, 0.5)", () => {
    it('should return -1', () => {
      expect(calculateNumber('SUBTRACT', -0.5, 0.5)).to.equal(-1);
    });
  });

  describe("calculateNumber('DIVIDE', -0.5, 0.5)", () => {
    it('should return 0', () => {
      expect(calculateNumber('DIVIDE', -0.5, 0.5)).to.equal(0);
    });
  });
});
