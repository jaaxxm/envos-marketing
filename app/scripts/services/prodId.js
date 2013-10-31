'use strict';

angular.module('envosMarketingApp')
  .factory('prodId', function ($http) {    

    var qString = "?app_name=envos-ru&fields=class%2C%20title%2C%20picture";
    var dspDBprodId = 'https://dsp-envos.cloud.dreamfactory.com/rest/db/prodBench/';

    var prodId = {
      async: function(queryId) {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.get(dspDBprodId + queryId + qString).then(function (response) {
          // The then function here is an opportunity to modify the response
          // console.log(response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
        // Return the promise to the controller
        return promise;
      }
    };
    return prodId;
  });
