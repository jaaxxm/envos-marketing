'use strict';

angular.module('envosMarketingApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })      
      .when('/products/:productClass/:productId', {
        templateUrl: '/views/product.detail.html',
        controller: 'ProductDetailsCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
    
    $locationProvider.html5Mode(true);
  })
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
        templateUrl: '/views/modal/lead.html',
        controller: ModalLeadCtrl,
        resolve: {
          fields: function () {
            return $scope.lead;
          }
        }
      });
      
      var a_p = "";
      var d = new Date();
      var curr_hour = d.getHours();
      if (curr_hour < 12)
         {
         a_p = "AM";
         }
      else
         {
         a_p = "PM";
         }
      if (curr_hour == 0)
         {
         curr_hour = 12;
         }
      if (curr_hour > 12)
         {
         curr_hour = curr_hour - 12;
         }

      var curr_min = d.getMinutes();

      curr_min = curr_min + "";

      if (curr_min.length == 1)
         {
         curr_min = "0" + curr_min;
         }
      var leadDate = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + " " + curr_hour + ":" + curr_min + " " + a_p;

      modalLead.result.then(function (leadFields) {
        $scope.lead = leadFields;        
        var emailData = {
          "template": "Lead",
          "from_name": "DreamFactory",
          "from_email": "no-reply@dreamfactory.com",
          "lead_date": leadDate, 
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

  });