var apiKey = "58f98fa230bebc4429c67f63eb29c0d3";
var Temp = require('./../js/temp.js').tempModule;

$(document).ready(function() {
  $('#tempLocation').click(function() {
    var city = $('#location').val();
    var ourTemp = new Temp();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
        $('.showTemp').text("The temperature in " + city + " is " + ourTemp.convertTemp(response.main.temp)[0] + "degrees Celsius" + ourTemp.convertTemp(response.main.temp)[1] + "degrees Fahrenheit.");


    }).fail(function(error) {
    $('.showTemp').text(error.responseJSON.message);
    });
  });
});
