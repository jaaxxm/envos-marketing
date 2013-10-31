'use strict';

angular.module('envosMarketingApp')
  .controller('ProductDetailsCtrl', function ($scope, $routeParams, prodId) {
    
		$scope.productId = $routeParams.productId;
  	$scope.productClass = $routeParams.productClass;

		prodId.async($scope.productId).then(function(d) {
	    $scope.Bench = d;
			switch($scope.productClass) {
			  case 'nkp':
			    $scope.template = "/views/content/nkp.html";
			    break;
			  case 'ikp':
			    $scope.template = "/views/content/ikp.html";
			    break;  
			}

	  });

  });