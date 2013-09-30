'use strict';

angular.module('envosMarketingApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
  .controller('envosMarketingAppCtrl', function($rootScope, $scope, $modal, $log, leadService, emailService) {
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
        var emailData = {
          "template": "Lead",
          "from_name": "DreamFactory",
          "from_email": "no-reply@dreamfactory.com",
          "lead_id": leadFields.id, 
          "lead_name": leadFields.name, 
          "lead_phone": leadFields.phone, 
          "lead_email": leadFields.email, 
          "lead_product": leadFields.product, 
          "lead_comment": leadFields.comment
        };
        var emailBody = JSON.stringify(emailData);
        leadService.async($scope.lead).then(function(data) {
          // client.publish('/Leads', {action: "add", newData: data});
        });

        emailService.async(emailBody).then(function(data) {
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
      .when('/product-nkp/:productId', {
        templateUrl: 'views/product-nkp.html',
        controller: 'ProductNkpCtrl'
      })
      .when('/product-ikp/:productId', {
        templateUrl: 'views/product-ikp.html',
        controller: 'ProductIkpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });