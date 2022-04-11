const palindromes = function (wordReverse) {
  let wordLower = wordReverse.toLowerCase();
  let wordTrue = wordLower.replace(/[^a-z]/g, "");
  var wordArray = wordTrue.split("");
  let reverseArray = wordArray.reverse();
  let reverseWord = reverseArray.join("");
  return reverseWord == wordTrue;
};

// Do not edit below this line
module.exports = palindromes;