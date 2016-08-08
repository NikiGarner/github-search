var User = require('./../js/github.js').userModule;

$(document).ready(function(){
  alert("test");
  $(".search").submit(function(event){
    event.preventDefault();
    alert('test2');
    $(".results").empty();
    var username = $("#username").val();
    var newUser = new User(username);
    newUser.getRepos(newUser.username);
  });
});
