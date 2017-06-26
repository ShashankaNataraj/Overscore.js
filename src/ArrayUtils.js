class ArrayUtils {
    constructor() {
        return {first: this.first, head: this.first, take: this.first};

    }
    /**
     * Returns the first element of an array. Passing n will return the first n elements of the array
     *
     * @param {Array} array
     * @param {any} n
     * @memberof ArrayUtils
     */
    first(passedArray = [], n = 1) {
        if (arguments.length === 0 || passedArray.length === null || passedArray.length === 0 || !(passedArray instanceof Array) || typeof n !== 'number') {
            return undefined;
        }
        let slicedArray = passedArray.slice(0, n),
            [ first, ...remaining ] = slicedArray;
        return n === 1 ? first : slicedArray;
    }
}

export default new ArrayUtils();