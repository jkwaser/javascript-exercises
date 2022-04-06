const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(toSum) {
  initialSum = 0;
  for (let i=0; i < toSum.length; i++) {
    initialSum += toSum[i]
    console.log(initialSum)
  }
  return initialSum;
};

const multiply = function(toMultiply) {
  x = 1;
  for (let i =0; i < toMultiply.length; i++) {
    x = x * toMultiply[i];
  }
  return x;
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(a) {
  let j = 1;
	for (let i = a; i > 0; i--) {
    j = j * i; 
  }
  return j;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
