'use strict';

angular.module('envosMarketingApp')
  .factory('emailService', function ($http) {

    var emailDSP = 'https://dsp-envos.cloud.dreamfactory.com/rest/leads/';
    var emailRequest = "?app_name=envos-ru";

    var emailService = {
      async: function(data) {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.post(emailDSP + emailRequest, data).then(function (response) {
          // The then function here is an opportunity to modify the response
          // console.log(response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
        // Return the promise to the controller
        return promise;
      }
    };
    return emailService;
    
  });