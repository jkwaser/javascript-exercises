const findTheOldest = function(ageBracket) {
    let oldest = 0;
    let namae = {};
    for (i in ageBracket) {
        if (typeof ageBracket[i].yearOfDeath === 'undefined') {
            const d = new Date();
            ageBracket[i].yearOfDeath = d.getFullYear()        }
    }
    for (i in ageBracket) {
        let TotalAge = ageBracket[i].yearOfDeath - ageBracket[i].yearOfBirth;
        console.log(ageBracket[i])
        console.log(TotalAge)
        if (TotalAge > oldest) {
        console.log(ageBracket[i])
        oldest = ageBracket[i].yearOfDeath - ageBracket[i].yearOfBirth;
        namae = ageBracket[i];
        }
    }
    return namae
}

// Do not edit below this line
module.exports = findTheOldest;
