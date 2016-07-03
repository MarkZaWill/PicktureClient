"use strict";

Pickture.controller('addController', [
	'$http', 
	'$scope',
    '$location',


function($http, $scope, $location){
	 $scope.Image = {
     ImageURL: "",
      
    };
    $scope.apiInfo = function() {

    	$http({
    		method: "POST",
    		headers: {
    			"Ocp-Apim-Subscription-Key":'f39da5b4632c4097a1605617ce134889',
    			"Content-Type" : "application/json"
    		 },	
    		url: "https://api.projectoxford.ai/emotion/v1.0/recognize",
    		data: {"url": $scope.Image.ImageURL } 
    	})
    	.then(
    	function(response) {

    	var newObj = {
    		Anger:  response.data[0].scores.anger,
    		Contempt:  response.data[0].scores.contempt,
    		Fear:  response.data[0].scores.fear,
    		Disgust:  response.data[0].scores.disgust,
    		Happiness:  response.data[0].scores.happiness,
    		Sadness:  response.data[0].scores.sadness,
    		Surprise:  response.data[0].scores.surprise,
    		Neutral:  response.data[0].scores.neutral,
    		ImageURL: $scope.Image.ImageURL,
    		TakerId: 1
    	}

    	$scope.storeImages(newObj)
    	});	
    



	 $scope.storeImages = function(object) {

      // POST to API
      $http
      .post("http://localhost:57677/api/image",

       //stringify to send to API
        JSON.stringify(object)

      
      )
      .then(
        () => $location.path("/main")      
      );
    };
    }
}
]);
