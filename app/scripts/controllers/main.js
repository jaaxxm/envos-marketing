'use strict';

angular.module('envosMarketingApp')
  .controller('MainCtrl', function ($scope, $modal, $http) {

    var client = new Faye.Client('https://api.cloud.dreamfactory.com:9292/bayeux');
    var qString = "?app_name=envos-ru&fields=*";
    var dspDBprodBench = 'https://dsp-envos.cloud.dreamfactory.com/rest/db/prodBench/';

   	// Get products from DB
    $http.get(dspDBprodBench + qString).success(function (data) {
      $scope.Bench = data;
    });    	  



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

	    // modalLightbox.result.then(function (selectedItem) {
	    //   $scope.selected = selectedItem;
	    // }, function () {
	    //   $log.info('Modal dismissed at: ' + new Date());
	    // });
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