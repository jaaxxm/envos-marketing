'use strict';

angular.module('envosMarketingApp')
  .controller('ProductIkpCtrl', function ($scope, $routeParams, prodId) {

  	$scope.productId = $routeParams.productId;

		prodId.async($scope.productId).then(function(d) {
	    $scope.Bench = d;
	  });
  			

  });
