const sumAll = function(num1, num2) {
    let start
    let end
    let sum = 0

    if (num1 > num2) { 
        start = num2;
        end = num1;
    }
    else if (num1 < num2) {
        start = num1;
        end = num2;
    }
    else {
        return num1;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
        
    }
    return sum;
};

console.log(sumAll(3, 8));

// Do not edit below this line
// module.exports = sumAll;
