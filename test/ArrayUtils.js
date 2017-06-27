import ArrayUtils from '../src/ArrayUtils';

const assert = require('assert'),
  scaffoldArray = [1, 2, 3, 4];
describe('ArrayUtils', function () {
  describe('#first()', function () {
    it('Should return undefined when no values are passed', () => assert.equal(ArrayUtils.first(), undefined));
    it('Should return the first element when only an array is passed', () => assert.equal(ArrayUtils.first(scaffoldArray), 1));
    it('Should return the first n elements when n is specified', () => assert.deepEqual(ArrayUtils.first(scaffoldArray, 2), [1, 2]));
    it('Should alias the first n elements when n is specified', () => assert.deepEqual(ArrayUtils.first(scaffoldArray, 2), [1, 2]));
    it('Should be available as #head and #take', () => {
      assert.strictEqual(ArrayUtils.first.prototype, ArrayUtils.head.prototype);
      assert.strictEqual(ArrayUtils.first.prototype, ArrayUtils.take.prototype);
    });
  });
});