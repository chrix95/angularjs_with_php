(function(){
  // create a directive
  var app = angular.module("myApp", []);

  // creates a controller called MainCtrl
  app.controller('MainCtrl', ['$scope','$http', function($scope, $http) {
	// function to execute the function are successful
    var onSuccess = function (response) {
      $scope.responses = response.data;
    };
	// function to execute the function failed
    var onError = function (response) {
      $scope.error = "Could not fetch data";
    };
	// function to execute if all button is clicked
    $scope.all = function () {
      var promise = $http({
        method: 'POST',
        url: 'script.php',
        data: {
          all: true,
          food: '',
          fruit: ''
        }
      });
      promise.then(onSuccess, onError);
    };
	// function to execute if food button is clicked
    $scope.food = function () {
      var promise = $http({
        method: 'POST',
        url: 'script.php',
        data: {
          all: '',
          food: true,
          fruit: ''
        }
      });
      promise.then(onSuccess, onError);
    };
	// function to execute if fruit button is clicked
    $scope.fruit = function () {
      var promise = $http({
        method: 'POST',
        url: 'script.php',
        data: {
          all: '',
          food: '',
          fruit: true
        }
      });
      promise.then(onSuccess, onError);
    };

  }]);


})();
