var apiKey = "58f98fa230bebc4429c67f63eb29c0d3";

$(document).ready(function() {
  $('#humidityLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");
      console.log(response);
    }).fail(function(error) {
    $('.showHumidity').text(error.responseJSON.message);
    });
  });
});
