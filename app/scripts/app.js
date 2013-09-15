'use strict';

angular.module('envosMarketingApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
  .controller('envosMarketingAppCtrl', function($rootScope, $scope, $modal) {    
    $rootScope.topScope = $rootScope;

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

      // modalLead.result.then(function (selectedItem) {
      //   $scope.selected = selectedItem;
      // }, function () {
      //   $log.info('Modal dismissed at: ' + new Date());
      // });
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

  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })      
      .when('/product-nkp', {
        templateUrl: 'views/product-nkp.html',
        controller: 'ProductNkpCtrl'
      })
      .when('/product-ikp', {
        templateUrl: 'views/product-ikp.html',
        controller: 'ProductIkpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });