'use strict';

angular.module('envosMarketingApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
  .controller('envosMarketingAppCtrl', function($rootScope, $scope, $modal, $log, leadService) {
    $rootScope.topScope = $rootScope;

    /////////////////////
    // Lead Modal
    /////////////////////
    $scope.openLead = function (productTitle) {
      
      $scope.lead = {
        product: productTitle
      };

      var modalLead = $modal.open({
        templateUrl: 'views/modal/lead.html',
        controller: ModalLeadCtrl,
        resolve: {
          fields: function () {
            return $scope.lead;
          }
        }
      });

      modalLead.result.then(function (leadFields) {
        $scope.lead = leadFields;
        leadService.async($scope.lead).then(function(data) {
          // client.publish('/Leads', {action: "add", newData: data});
        });        
        // $log.info($scope.lead);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    var ModalLeadCtrl = function ($scope, $modalInstance, fields) {

      $scope.lead = fields;

      $scope.sendLead = function () {
        $modalInstance.close($scope.lead);
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