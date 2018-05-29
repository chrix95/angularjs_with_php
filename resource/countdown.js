(function(){
  // create a directive
  var app = angular.module("myApp", []);

  // creates a controller called MainCtrl
  app.controller('MainCtrl',
    ['$scope','$http','$interval', '$log', '$location', '$anchorScroll', // set of required services and object
      function($scope, $http, $interval, $log, $location, $anchorScroll) { // set of required services and object

    // function called if search() is successful
    var onSuccess = function(response){
      $scope.user = response.data;
      var promise = $http.get($scope.user.repos_url);
      promise.then(onSearchResult, onError);
    }

    // function called if onSuccess() is successful
    var onSearchResult = function (response) {
      $scope.repos = response.data;
      $location.hash("userDetails");
      $anchorScroll();
    }

    // function called if search() or onSuccess() fails
    var onError = function(response) {
      $scope.error = "Could not fetch data";
    }

    var decrementCountdown = function () {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var countdownInterval = null; // sets an empty countdown
    var startCountDown = function () {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown); // interval service is called every 1sec to confirm if its upto 5 before auto search commences
    };


    $scope.search = function(username) {
      $log.info("Searching for " + username); // logs info to console for debugging purposes
      var promise = $http.get("https://api.github.com/users/" + username);
      promise.then(onSuccess, onError);
      if (countdownInterval) { // if its set to null
        $interval.cancel(countdownInterval); // cancels the countdown for auto search
        $scope.countdown = null; // sets  the countdown variable to null
      }
    };

    // variable to store the sort order from select box
    $scope.orderSortBy = "-stargazers_count";
    $scope.username = "angular";
    $scope.countdown = 5; // sets a specific time for a search to be perform
    startCountDown(); // begins countdown to auto search function

  }]);


})();
