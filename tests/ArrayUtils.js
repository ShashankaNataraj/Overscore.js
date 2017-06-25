import test from 'ava';
import ArrayUtils from '../src/ArrayUtils';

test('initial > Returns the first element of an array', t => {
    t.is(ArrayUtils.initial([1, 2, 3]), 1);
});
test('initial > Passing n will return the first n elements of the array', t => {
    t.deepEqual(ArrayUtils.initial([
        1, 2, 3
    ], 1), [1]);
    t.deepEqual(ArrayUtils.initial([
        1, 2, 3
    ], 2), [1, 2]);
});