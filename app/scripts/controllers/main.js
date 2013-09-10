'use strict';

angular.module('envosMarketingApp')
  .controller('MainCtrl', function ($scope, $modal, $log) {
	  
	  /////////////////////
	  // Products Series
	  /////////////////////	 
	  $scope.products = [ 
	  	{ title: 'Серия НКП 01У', url: 'views/products/nkp.html'}, 
	  	{ title: 'Серия ИКП 01У', url: 'views/products/ikp.html'}
	  ];
	  
	  // $scope.product = $scope.products[0];

	  $scope.showProducts = function(num) {
	  	$scope.product = $scope.products[num];
	  }
	  $scope.closeProducts = function() {
	  	$scope.product = false;
	  }

		/////////////////////
	  // Modal Window
	  /////////////////////	 	  
		$scope.items = ['item1', 'item2', 'item3'];

	  $scope.openPurchase = function () {

	    var modalInstance = $modal.open({
	      templateUrl: 'views/modal/purchase.html',
	      controller: ModalPurchaseCtrl,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

		var ModalPurchaseCtrl = function ($scope, $modalInstance, items) {

		  $scope.items = items;
		  $scope.selected = {
		    item: $scope.items[0]
		  };

		  $scope.ok = function () {
		    $modalInstance.close($scope.selected.item);
		  };

		  $scope.cancel = function () {
		    $modalInstance.dismiss('cancel');
		  };
		};


	});