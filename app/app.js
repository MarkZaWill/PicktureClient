"use strict";

/* exported Pickture */

let Pickture = angular.module("Pickture", ["ngRoute", "chart.js"]);



/*
  Set up routes for Pickture app
 */
Pickture.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.

      when("/", {
        templateUrl: "partials/login.html",
        controller: "authController"
       
      }).
      when("/results", {
        templateUrl: "partials/results.html",
        controller: "emotionController"
         
      }).
      when("/logout", {
        templateUrl: "partials/login.html",
        controller: "authController"
      }).
      when("/main", {
        templateUrl: "partials/main.html",
        controller: "MainController"
      }).
      when("/addPhoto", {
        templateUrl: "partials/addPhoto.html",
        controller: "addController"
      }).
        otherwise({
        redirectTo: "/"
      });
  }]);

