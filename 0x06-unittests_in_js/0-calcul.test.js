const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber(a, b) - rounds a and b and returns their sum', () => {
  describe('a = 1, b = 2', () => {
    it('should return 3', () => {
      assert.equal(calculateNumber(1, 2), 3);
    });
  });

  describe('a = 1, b = 3', () => {
    it('should return 4', () => {
      assert.equal(calculateNumber(1, 3), 4);
    });
  });

  describe('a = 1, b = 3.7', () => {
    it('should return 5', () => {
      assert.equal(calculateNumber(1, 3.7), 5);
    });
  });

  describe('a = 1.2, b = 3.7', () => {
    it('should return 5', () => {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });
  });

  describe('a = 1.5, b = 3.7', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });

  describe('a = 1.1, b = 3.1', () => {
    it('should return 4', () => {
      assert.equal(calculateNumber(1.1, 3.1), 4);
    });
  });

  describe('a = 0.5, b = 3.2', () => {
    it('should return 4', () => {
      assert.equal(calculateNumber(0.5, 3.2), 4);
    });
  });

  describe('a = -2.5, b = 3.2', () => {
    it('should return 1', () => {
      assert.equal(calculateNumber(-2.5, 3.2), 1);
    });
  });

  describe('a = -2.1, b = -3.5', () => {
    it('should return -5', () => {
      assert.equal(calculateNumber(-2.1, -3.5), -5);
    });
  });

  describe('a = -2.8, b = -3.7', () => {
    it('should return -7', () => {
      assert.equal(calculateNumber(-2.8, -3.7), -7);
    });
  });

  describe('a = -2.5, b = -3.5', () => {
    it('should return -5', () => {
      assert.equal(calculateNumber(-2.5, -3.5), -5);
    });
  });
});
