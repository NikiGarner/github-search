function Temp() {
}

Temp.prototype.convertTemp = function(tempKelvin) {
  var response = [];
  var celsius = tempKelvin - 273.15;
  var Fahrenheit = (celsius * 1.8) + 32;
  response.push(celsius, Fahrenheit);
  return response;
};

exports.tempModule = Temp;
