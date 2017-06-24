class ArrayUtils { 
    constructor() {
        return {
            initial:this.initial
        };

    }
    /**
     * Returns the first element of an array. Passing n will return the first n elements of the array
     * 
     * @param {Array} array 
     * @param {any} n 
     * @memberof Array
     */
    initial(array, n) { 
        [first, ...remaining] = array;
        return first;
    }
}

export default new ArrayUtils();