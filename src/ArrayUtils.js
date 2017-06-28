export default (function () {
    /**
     * Utility function to 
     * 
     * @param {any} passedArray 
     * @param {any} n 
     * @returns 
     */
    function areArgumentsValid(passedArray, n) { 
        if (passedArray === null && n === null) { 
            return false;
        }
        if (arguments.length === 0 || passedArray.length === null || passedArray.length === 0 || !(passedArray instanceof Array) || typeof n !== 'number') {
            return false;
        }
        return true;
    }
    /**
     * Returns the first element of an array. Passing n will return the first n elements of the array
     *
     * @param {Array} array
     * @param {any} n
     * @memberof ArrayUtils
     */
    function first(passedArray = [], n = 1) {
        if (!areArgumentsValid(passedArray, n)) { 
            return undefined;
        }
        let slicedArray = passedArray.slice(0, n),
            [first, ...remaining] = slicedArray;
        return n === 1 ? first : slicedArray;
    }
    /**
     * Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.
     *
     * @param {any} array
     * @param {any} n
     * @memberof ArrayUtils
     */
    function initial(passedArray = [], n = 1) {
        if (!areArgumentsValid(passedArray, n)) { 
            return undefined;
        }
        let subtractor = n > 0 ? n : 1;
        let initialElements = passedArray.slice(0, passedArray.length - subtractor);
        return initialElements;
    }
    return {first, head: first, take: first, initial};
})();