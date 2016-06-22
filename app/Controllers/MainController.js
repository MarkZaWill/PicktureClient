"use strict";

Pickture.controller('MainController', [
	'$http', 
	'$scope',

	function ($http, $scope) {

		$scope.images = [];

		$http
			.get("http://localhost:57677/api/image")	
			.success(
				function(img){
					$scope.images = img;
				})



		$scope.deleteImage = function (id) {
			$http({
				method: "DELETE",
				url: `http://localhost:5000/api/Image/${id}`
			})
			.then(
				() => console.log("Image deleted"),
				() => console.log("Image not deleted")
			);
		}

		$scope.makePercentageFromDecimal = function(decimal){
			return (decimal * 100).toFixed(2)
		}
	}

]);