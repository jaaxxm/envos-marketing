'use strict';

angular.module('envosMarketingApp')
  .factory('leadService', function ($http) {
    
    var leadsDSP = 'https://dsp-envos.cloud.dreamfactory.com/rest/db/Leads/';
    var leadsTemplate = "?app_name=envos-ru&fields=*";

    var leadService = {
      async: function(data) {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.post(leadsDSP + leadsTemplate, data).then(function (response) {
          // The then function here is an opportunity to modify the response
          // console.log(response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
        // Return the promise to the controller
        return promise;
      }
    };
    return leadService;
    
  });