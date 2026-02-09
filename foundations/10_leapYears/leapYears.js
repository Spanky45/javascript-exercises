const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) {
        return 'Leap Year.'
    }
    else {
        return 'Not a Leap Year.'
    }
};
console.log(leapYears(2000))
// Do not edit below this line
// module.exports = leapYears;
