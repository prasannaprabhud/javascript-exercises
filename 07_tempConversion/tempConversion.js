const convertToCelsius = function(temp) {
  // °C = (°F − 32) × 5/9.
  const fahrenheit = temp;
  const convertionFormula = (fahrenheit - 32) * 5/9;
  return Math.round(convertionFormula) / 10;
};

const convertToFahrenheit = function(temp) {
  // °F = °C × 9/5 + 32.
  const celsius = temp;
  const convertionFormula = celsius * 9/5 + 32;
  return Math.round(convertionFormula) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
