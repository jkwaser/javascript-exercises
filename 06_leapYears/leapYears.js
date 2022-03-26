const leapYears = function(theYear) {
    if(theYear % 400 == 0) {
        return true
    }

    else if(theYear % 100 == 0) {
        return false
    }

    else if(theYear % 4 == 0) {
        return true
    }

    else return false;

}

// Do not edit below this line
module.exports = leapYears;
