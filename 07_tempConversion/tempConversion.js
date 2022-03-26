const ftoc = function(temperature) {
  let celsius = (temperature - 32) * 5/9;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const ctof = function(temperature) {
  let farenheight = (temperature * 9/5) + 32;
  farenheight = Math.round(farenheight * 10) / 10;
  return farenheight;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
