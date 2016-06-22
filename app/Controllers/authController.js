"use strict";

Pickture.controller('authController', [
  '$http', 
  '$scope',
  'authFactory',


  function ($http, $scope, authFactory) {

    $scope.twitterOauth = function () {
      OAuth.initialize('YyKgBflYmTzZ6Jpl4rAIUCxQFqg');

      OAuth.popup('twitter').done(function(result) {
          console.log(result)
    // do some stuff with result

        result.me().done(function(data) {
            // do something with `data`, e.g. print data.name
            console.log(data);

            $http({
              url: "http://localhost:57677/api/taker",
              method: "POST",
              data: JSON.stringify({
                TakerName: data.name
                
              })

            }).then( 
            response => {
              let theUser = response.data;
              console.log(theUser, "the User")
              authFactory.setUser(theUser);
              console.log("resolve fired", theUser);
            },
            response => {
              console.log("reject fired", response);

              // Listener has already been created
              if (response.status === 409) {
                $http
                  .get(`http://localhost:5000/api/taker?username=${data.name}`)
                  .then(
                    response => {
                      let theListener = response.data[0];
                      console.log("Found the Taker", theUser);
                      authFactory.setUser(theUser)
                    },
                    response => console.log("Could not find that Taker", response)
                  )
              
              }

            }
            )
        })
      });
    };
  }
]);