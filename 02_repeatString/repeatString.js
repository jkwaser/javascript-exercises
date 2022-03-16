const repeatString = function(inputString, timesRepeat) {
    string = "";
    if (timesRepeat < 0){
        return "ERROR"
    }
    for(let i = 0; i < timesRepeat; i++){
        string += inputString;
        console.log(string);
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
