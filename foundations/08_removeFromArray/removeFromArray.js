const removeFromArray = function(arr, filNum) {
    return arr.filter(element => element !== filNum);
};

console.log(removeFromArray([1, 2, 3, 4, 5, 6], 3));


// Do not edit below this line
// module.exports = removeFromArray;
