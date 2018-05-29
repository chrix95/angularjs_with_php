(function(){
  // create a directive
  var app = angular.module("myApp", []);

  // creates a controller called MainCtrl
  app.controller('MainCtrl', ['$scope','$http', function($scope, $http) {

    var onSuccess = function(response){
      $scope.user = response.data;
    }

    var onError = function(response) {
      $scope.error = "Could not fetch data";
    }

    // script executes once the page loads 
    var promise = $http.get("https://api.github.com/users/chrix95")
    promise.then(onSuccess, onError);

  }]);


})();
