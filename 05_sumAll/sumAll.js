const sumAll = function(a,b) {
    if (a <0 || b < 0) {
        return "ERROR";
    }
    if (typeof a != 'number' || typeof b != 'number') {
        return "ERROR";
    }
    let bigger = b;
    let smaller = a;
    let sum = 0;
    if (a > b) {
        bigger = a;
        smaller = b;
    }
    
    for(let i = smaller; i <= bigger; i++) {
        sum += i;
        console.log(sum);
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
