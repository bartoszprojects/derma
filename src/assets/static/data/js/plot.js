// Code goes here
(function() {
  var app = angular.module("Bar_Chart", ["chart.js"]);
  app.controller('jsonServerBox', function($scope) {

    $scope.medal_ticks = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
    $scope.series = ['Medaljer'];

    $scope.medal_data = [[65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]];
  });

})();

