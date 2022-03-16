const reverseString = function(stringInput) {
    var newString = "";
    for (var i = stringInput.length - 1; i >=0; i--) {
        newString += stringInput[i];
        console.log(newString);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
