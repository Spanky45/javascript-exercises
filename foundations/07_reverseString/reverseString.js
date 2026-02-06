const reverseString = function() {
const str = 'hello there';
const arr = str.split(' ');

for (let i = 0; i < arr.length; i++)
    arr[i] = arr[i].split('').reverse().join('')
return arr.reverse().join(' ');
};
console.log(reverseString());
// Do not edit below this line
// module.exports = reverseString;
