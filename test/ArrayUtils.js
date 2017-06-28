import ArrayUtils from '../src/ArrayUtils';

const assert = require('assert'),
  scaffoldArray = [1, 2, 3, 4];
describe('ArrayUtils', () => {
  describe('#first()', () => {
    it('Should return undefined when null values are passed', () => assert.strictEqual(ArrayUtils.first(null, null), undefined));
    it('Should return undefined when undefined values are passed', () => assert.strictEqual(ArrayUtils.first(undefined, undefined), undefined));
    it('Should return undefined when no values are passed', () => assert.strictEqual(ArrayUtils.first(), undefined));
    it('Should return the first element when only an array is passed', () => assert.strictEqual(ArrayUtils.first(scaffoldArray), 1));
    it('Should return the first n elements when n is specified', () => assert.deepEqual(ArrayUtils.first(scaffoldArray, 2), [1, 2]));
    it('Should be available as #head and #take', () => {
      assert.strictEqual(ArrayUtils.first.prototype, ArrayUtils.head.prototype);
      assert.strictEqual(ArrayUtils.first.prototype, ArrayUtils.take.prototype);
    });
  });
  describe('#initial', () => {
    it('Should return undefined when null args are passed', () => assert.strictEqual(ArrayUtils.initial(null, null), undefined));
    it('Should return undefined when undefined args are passed', () => assert.strictEqual(ArrayUtils.initial(undefined, undefined), undefined));
    it('Should return undefined when no arguments are passed', () => assert.strictEqual(ArrayUtils.initial(), undefined));
    it('Should return everything but the last entry of the array when only array is passed', () => assert.deepEqual(ArrayUtils.initial(scaffoldArray), [1, 2, 3]));
    it('Passing an array and n excludes last n elements from the result', () => {
      assert.deepEqual(ArrayUtils.initial(scaffoldArray, 2), [1, 2]);
      assert.deepEqual(ArrayUtils.initial(scaffoldArray, 3), [1]);
    });
  });
  describe('#last', () => {
    it('Should return undefined when null args are passed', () => assert.strictEqual(ArrayUtils.last(null, null), undefined));
    it('Should return undefined when undefined args are passed', () => assert.strictEqual(ArrayUtils.last(null, null), undefined));
  });
});