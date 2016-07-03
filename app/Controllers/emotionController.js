

"use strict";

Pickture.controller('emotionController', [
	'$http', 
	'$scope',

	

	function ($http, $scope) {

		$scope.emotions = [];

		$http
			.get("http://localhost:57677/api/emotions")
			.success(emo => $scope.emotions = emo)
	}

]);

