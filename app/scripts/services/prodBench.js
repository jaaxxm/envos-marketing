'use strict';

angular.module('envosMarketingApp')
  .factory('prodBench', function ($http) {

    var qString = "?app_name=envos-ru&fields=*";
    var dspDBprodBench = 'https://dsp-envos.cloud.dreamfactory.com/rest/db/prodBench/';

    var prodBench = {
      async: function() {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.get(dspDBprodBench + qString).then(function (response) {
          // The then function here is an opportunity to modify the response
          // console.log(response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
        // Return the promise to the controller
        return promise;
      }
    };
    return prodBench;


  });
