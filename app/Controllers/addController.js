"use strict";

Pickture.controller('addController', [
	'$http', 
	'$scope',


function($http, $scope){
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

      // POST the song to Firebase
      $http
      .post("http://localhost:57677/api/image",

        // Remember to stringify objects/arrays before
        // sending them to an API
        JSON.stringify(object)

      // The $http.post() method returns a promise, so you can use then()
      )
      .then(
        // () => $location.url("/image"),      // Handle resolve
        (response) => console.log(response)  // Handle reject
      );
    };
    }
}
]);
