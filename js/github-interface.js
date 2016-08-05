// 
// var getRepos = require("./../js/github.js").getRepos;
//
// $(function(){
//   $("#btn").submit(function(event){
//     event.preventDefault();
//
//     var search = $("#name").val();
//
//     // $(".showRepo").empty();
//     // $(".showName").empty();
//     getRepos(search);
//
//     $("input#name").val("");
//
//   });
//
// });
//
// var Repo = require("./../js/github.js").Repo;
//
// $(document).ready(function() {
//
//   var currentRepoObject = new Repo();
//
//   $("form#input").submit(function(event) {
//     event.preventDefault();
//
//     var username = $("#ghUsername").val();
//     $("#ghUsername").val("");
//
//     currentRepoObject.getRepos(username);
//
//   });
// });
//
//
// var getRepos = require("./../js/github.js").getRepos;
//
// $(document).ready(function() {
// $("form#search-form").click(function(event){
//   event.preventDefault();
//
//   var search = $("input#human-search").val();
//
//   $("#repos").empty();
//   $("#search-name").empty();
//
//   getRepos(search);
//
//   $("input#human-search").val("");
// });
// });
