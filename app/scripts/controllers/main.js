'use strict';

angular.module('envosMarketingApp')
  .controller('MainCtrl', function ($scope, $modal, prodBench) {


		prodBench.async().then(function(d) {
	    $scope.Bench = d;
	  });
		

	});