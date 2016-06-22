"use strict";

Pickture.controller('MainController', [
	'$http', 
	'$scope',
	'$location',



	function ($http, $scope, $location) {

		$scope.images = [];
		
		$http
			.get("http://localhost:57677/api/image")	
			.success(
				function(img){
					$scope.images = img;
					console.log($scope.images[0].Anger, "Anger")
					 $scope.labels = ["Anger", "Contempt", "Happiness", "Neutral", "Fear", "Sadness", "Surprise", "Disgust"];
 		 $scope.data = [$scope.images[0].Anger, $scope.images[0].Contempt, $scope.images[0].Happiness, $scope.images[0].Neutral, $scope.images[0].Fear, $scope.images[0].Sadness, $scope.images[0].Surprise, $scope.images[0].Disgust];
				})

		// $scope.addChart = function($scope.images) {
		//   $scope.labels = ["Anger", "Contempt", "Happiness", "Neutral", "Fear", "Sadness", "Surprise", "Disgust"];
 	// 	 $scope.data = [$scope.images.Anger, $scope.images.Contempt, $scope.images.Happiness, $scope.images.Neutral, $scope.images.Fear, $scope.images.Sadness, $scope.images.Surprise, $scope.images.Disgust];
		// }

		$scope.deleteImage = function (id) {
			console.log(id)
			$http({
				method: "DELETE",
				url: `http://localhost:57677/api/Image/${id}`
			})
			.then(
				() => console.log("Image deleted"),
				() => console.log("Image not deleted")
			)
			.then(
				() => $location.url()
				);

		}

		$scope.makePercentageFromDecimal = function(decimal){
			return (decimal * 100).toFixed(2)
		}
	}

]);