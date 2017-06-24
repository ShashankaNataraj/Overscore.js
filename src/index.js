import ArrayUtils from './Array';

let _ = (function (ArrayUtils) {
    console.log(ArrayUtils);
    let returnObj = Object.assign({}, ArrayUtils);
    console.dir(returnObj);
    return returnObj;
})(ArrayUtils);