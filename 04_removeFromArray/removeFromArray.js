const removeFromArray = function(entryArray, itemRemove) {
    console.log(arguments);
    for (var j = 0; j <arguments.length; j++) {
        for(var i = 0; i < entryArray.length; i++){ 
            if (entryArray[i] === arguments[j]){
            entryArray.splice(i, 1);
            }
        }
    }
    return entryArray;
};

// Do not edit below this line
module.exports = removeFromArray;
