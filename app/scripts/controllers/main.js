'use strict';

angular.module('envosMarketingApp')
  .controller('MainCtrl', function ($scope, $modal, $log, $http, $location, $anchorScroll) {

    var client = new Faye.Client('https://api.cloud.dreamfactory.com:9292/bayeux');
    var qString = "?app_name=envos-ru&fields=*";
    var dspDBprodBench = 'https://dsp-envos.cloud.dreamfactory.com/rest/db/prodBench/';

   	// Get products from DB
    $http.get(dspDBprodBench + qString).success(function (data) {
      $scope.Bench = data;
    });    	  

    // Toggle Featured/All
		$scope.toggleNkp = true;
		$scope.toggleNkpLabel = 'Show All';

		$scope.toggleAllNkp = function () {
      if ($scope.toggleNkp === true){
        $scope.toggleNkp = false;
				$scope.toggleNkpLabel = 'Show Less';
      } else {
        $scope.toggleNkp = true;
				$scope.toggleNkpLabel = 'Show More';
      }
		}

		$scope.toggleIkp = true;
		$scope.toggleIkpLabel = 'Show All';
		
		$scope.toggleAllIkp = function () {
      if ($scope.toggleIkp === true){
        $scope.toggleIkp = false;
				$scope.toggleIkpLabel = 'Show Less';
      } else {
        $scope.toggleIkp = true;
				$scope.toggleIkpLabel = 'Show More';
      }
		}
	  /////////////////////
	  // Product Description
	  /////////////////////	 
	  $scope.details = [ 
	  	{ title: 'Серия НКП 01У', url: 'views/products/nkp-description.html'}, 
	  	{ title: 'Серия ИКП 01У', url: 'views/products/ikp-description.html'}
	  ];
	  $scope.showDetailsNkp = function() {
	  	$scope.detail = $scope.details[0];
	  }
	  $scope.showDetailsIkp = function() {
	  	$scope.detail = $scope.details[1];
	  }
	  $scope.closeDetails = function() {
	  	$scope.detail = false;
	  }

		/////////////////////
	  // Lead Modal
	  /////////////////////	 	  
		$scope.items = ['item1', 'item2', 'item3'];

	  $scope.openLead = function () {

	    var modalLead = $modal.open({
	      templateUrl: 'views/modal/lead.html',
	      controller: ModalLeadCtrl,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalLead.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

		var ModalLeadCtrl = function ($scope, $modalInstance, items) {

		  $scope.items = items;
		  $scope.selected = {
		    item: $scope.items[0]
		  };

		  $scope.sendLead = function () {
				
				// $scope.postLead = $http.post('FIRSTRESTURL', {cache: false});
				// $scope.sendLead = $http.post('SECONDRESTURL', {'cache': false});

				// $q.all([$scope.product_list_1, $scope.product_list_2]).then(function(values) {
				//     $scope.results = MyService.doCalculation(values[0], values[1]);
				// });

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