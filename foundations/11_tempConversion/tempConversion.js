const convertToCelsius = function(far) {
  return Math.round(((far - 32) * 5/9) * 10) / 10;
};

console.log(convertToCelsius(76));

const convertToFahrenheit = function(cel) {
  return Math.round(((cel * 9/5) + 32) * 10) / 10;
};

console.log(convertToFahrenheit(24))

// Do not edit below this line
// module.exports = {
//   convertToCelsius,
//   convertToFahrenheit
// };
