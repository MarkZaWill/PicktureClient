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
				})

		$scope.addChart = function() {
		  $scope.labels = ["Anger", "Contempt", "Happiness", "Neutral", "Fear", "Sadness", "Surprise", "Disgust"];
 		 $scope.data = [img.Anger, img.Contempt, img.Happiness, img.Neutral, img.Fear, img.Sadness, img.Surprise, img.Disgust];
		}

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