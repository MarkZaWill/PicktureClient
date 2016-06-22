"use strict";

Pickture.controller('MainController', [
	'$http', 
	'$scope',
	'$location',
	'chart.js',


	function ($http, $scope, $location) {

		$scope.images = [];
		
		$http
			.get("http://localhost:57677/api/image")	
			.success(
				function(img){
					$scope.images = img;
				})

		$scope.addChart = function($scope, chart.js) {
		  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
 		 $scope.data = [300, 500, 100];
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