"use strict";

Pickture.controller('MainController', [
	'$http', 
	'$scope',
	'$location',



	function ($http, $scope, $location) {

		$scope.images = [];
		$scope.data = [];
		var tempArr = [];
		$http
			.get("http://localhost:57677/api/image")	
			.success(
				function(img){
					$scope.images = img;
					console.log($scope.data)
					for (var i = $scope.images.length - 1; i >= 0; i--) {
					 $scope.labels = ["Anger", "Contempt", "Happiness", "Neutral", "Fear", "Sadness", "Surprise", "Disgust"];
 		 tempArr.push([$scope.images[i].Anger, $scope.images[i].Contempt, $scope.images[i].Happiness, $scope.images[i].Neutral, $scope.images[i].Fear, $scope.images[i].Sadness, $scope.images[i].Surprise, $scope.images[i].Disgust]);
				}
				$scope.data.push(tempArr);
				console.log(tempArr, "tempArr")
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