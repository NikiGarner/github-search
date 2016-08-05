(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
