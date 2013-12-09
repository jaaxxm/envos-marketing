'use strict';

angular.module('envosMarketingApp')
  .controller('MainCtrl', function ($scope, prodBench, collapseBlocks, $location, $anchorScroll) {

	  $scope.isCollapsed = collapseBlocks.initBlocks();
		  
	  $scope.openSerie = function(e)
	  {
  		$location.hash('series');
      $anchorScroll();
      collapseBlocks.openBlock(e);	  	
	  }
	  $scope.hideSerie = function(e)
	  {	   
      collapseBlocks.closeBlock(e);
	  }
	  $scope.showNew = function()
	  {	   
      collapseBlocks.openBlock(0);	  	
	  }

		prodBench.async().then(function(d) {
	    $scope.Bench = d;
	  });

	});