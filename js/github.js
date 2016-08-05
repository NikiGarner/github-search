// var apiKey = require('./../.env').apiKey;
// var search = require('./../js/github-interface.js').search;
//
// exports.getRepos = function(search){
//   $.get('https://api.github.com/users/' + search + '/repos?acess_token=' + apiKey).then(function(response){
//     console.log(response);
//     // $(".showName").append(search);
//     // $(".showRepo").append("Repositories: ");
//     // response.forEach(function(userRepo){
//     //   $(".showRepo").append("<li>" + userRepo.name +"<br>" + userRepo.description + "</li>");
//     // });
//   }).fail(function(error){
//     $("#name").append("Name does not match. Please check your spelling");
//   });
// };

// exports.Repo = function(){
// }
//
// var apiKey = require("./../.env").apiKey;
//
// exports.Repo.prototype.getRepos = function(username) {
//   $.get("https://api.github.com/users/" + username + "/repos?access_token=" + apiKey).then(function(response) {
//
//     response.forEach(function(repo) {
//       $("ol#showRepos").append("<li>" + "Repo Name: " + repo.name + ",  Description: " + repo.description + "</li>");
//     });
//
//   }).fail(function(error){
//       $("ol#showRepos").text(error.responseJSON.message);
//     });
//
//     $("ol#showRepos").empty();
//
// }

var apiKey = require("./../.env").apiKey;

exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
// var search = require("./../js/github-interface.js").search;
//
// exports.getRepos = function(search){
//   $.get('https://api.github.com/users/' + search + '/repos?acess_token=' + apiKey).then(function(response){
//     console.log(response);
//
//     console.log(JSON.stringify(response));
//
//     $("#search-name").append(search);
//
//     $("ul#repos").append("Repositories: ");
//
//     response.forEach(function(userRepo){
//       $("ul#repos").append("<li>" + userRepo.name +"<br>" + userRepo.description + "</li>");
//     });
//
//   }).fail(function(error){
//     $("#search-name").append("no one here by that name." + "<br>" + "nice try, robot.");
//
//
//   });
// };
