class ArrayUtils {
    constructor() {
        return {initial: this.initial};

    }
    /**
     * Returns the first element of an array. Passing n will return the first n elements of the array
     *
     * @param {Array} array
     * @param {any} n
     * @memberof Array
     */
    initial(array, n) {
        let first,
            remaining;
        if (!n) { // if n isnt passed just do a first
            [
                first, ...remaining
            ] = [...array];
            return first;
        } else {
            return array.slice(0, n);
        }
    }
}

export default new ArrayUtils();