'use strict';

angular.module('envosMarketingApp')
  .controller('MainCtrl', function ($scope, prodBench) {

	  $scope.isCollapsed = [true, true, true];
	  
	  $scope.openSerie = function(e)
	  {
	  	if($scope.isCollapsed[e] = false) {
	  		$scope.isCollapsed[e] = true;
	  	} else {	  		
		    for(var i=0;i<$scope.isCollapsed.length;i++)
		      $scope.isCollapsed[i]=true;
		    $scope.isCollapsed[e] = !$scope.isCollapsed[e];
	  	}
	  }

	  $scope.hideSerie = function(e)
	  {	   
	    $scope.isCollapsed[e] = true;
	  }

		prodBench.async().then(function(d) {
	    $scope.Bench = d;
	  });
		

	});