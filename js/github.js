var apiKey = require('./../.env').apiKey;

User = function(username) {
  this.username = username;
};

User.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    response.forEach(function(repository) {
      $(".results").append("<a href="+ repository.html_url + ">" + repository.name + "</a>" + "<br>" + repository.description + " " + moment(repository.created_at).format('MM/DD/YYYY') + "<br>");
    });
  }).fail(function(error) {
    alert(error.responseJSON.message);
  });
};

exports.userModule = User;
