'use strict';

angular.module('envosMarketingApp')
  .controller('MainCtrl', function ($scope, $modal, $log, $http) {


    var client = new Faye.Client('https://api.cloud.dreamfactory.com:9292/bayeux');
    var qString = "?app_name=envos-ru&fields=*";
    var myDSP = 'https://dsp-jaaxxm.cloud.dreamfactory.com/rest/db/prodBench/';

    
    $http.get(myDSP + qString).success(function (data) {
      $scope.Bench = data;
    });    
	  
	  /////////////////////
	  // Products Series
	  /////////////////////	 
	  $scope.products = [ 
	  	{ title: 'Серия НКП 01У', url: 'views/products/nkp.html', descr: 'views/products/nkp-description.html'}, 
	  	{ title: 'Серия ИКП 01У', url: 'views/products/ikp.html', descr: 'views/products/ikp-description.html'}
	  ];
	  
	  // $scope.product = $scope.products[0];

	  $scope.showProducts = function(num) {
	  	$scope.product = $scope.products[num];
	  }
	  $scope.closeProducts = function() {
	  	$scope.product = false;
	  }

		/////////////////////
	  // Purchase Modal
	  /////////////////////	 	  
		$scope.items = ['item1', 'item2', 'item3'];

	  $scope.openPurchase = function () {

	    var modalPurchase = $modal.open({
	      templateUrl: 'views/modal/purchase.html',
	      controller: ModalPurchaseCtrl,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalPurchase.result.then(function (selectedItem) {
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

		/////////////////////
	  // Lightbox Modal
	  /////////////////////	 	  

	  $scope.openLightbox = function () {

	    var modalLightbox = $modal.open({
	      templateUrl: 'views/modal/lightbox.html',
	      controller: ModalLightboxCtrl,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalLightbox.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

		var ModalLightboxCtrl = function ($scope, $modalInstance, items) {

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