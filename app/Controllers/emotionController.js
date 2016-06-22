// "use strict";

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


// Pickture.controller('authController', [
//   '$http', 
//   '$scope',
//   'authFactory',
  
//     function($http, $scope) {
//     	$scope.emotions = [];

//         var params = {
//         	$http
// 			.get("http://localhost:57677/api/image")
// 			.success(img => $scope.images = img);
// 			console.log($scope.images);
            
//         };
      
//         $http({
//             url: "https://api.projectoxford.ai/emotion/v1.0/recognize?" + params;
//             beforeSend: function(xhrObj){
//                 // Request headers
//                 xhrObj.setRequestHeader("Content-Type","application/json");
//                 xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{subscription key}");
//             },


//             type: "POST",
//             data :JSON.stringify(data),
//             url: "api/image",
//             contentType: "application/json"
//             // data: "{body}",

//         })
//         .success(function(data) {
           
//             .success(emo => $scope.emotions = );
// 			console.log($scope.images);
//         })
//         .fail(function() {
//             alert("error");
//         });
//         console.log(data);
//     };
