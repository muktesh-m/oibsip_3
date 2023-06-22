function convertTemperature() {
  var temperature = parseFloat(document.getElementById("inputTemperature").value);

  if (document.getElementById("celsiusToFahrenheit").checked) {
    var convertedTemperature = (temperature * 9 / 5) + 32;
    var resultText = temperature + "°C is equal to " + convertedTemperature.toFixed(2) + "°F";
  } else {
    var convertedTemperature = (temperature - 32) * 5 / 9;
    var resultText = temperature + "°F is equal to " + convertedTemperature.toFixed(2) + "°C";
  }

  document.getElementById("result").innerText = resultText;
}
