const fibonacci = function(fib) {
    if (fib < 0) { return "OOPS" }
    let a = 0;
    let b = 1;
    for (let i = 1; i < fib; i++) {
        let x = b;
        b = a + b;
        a = x;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
