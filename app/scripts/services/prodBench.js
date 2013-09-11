'use strict';

angular.module('envosMarketingApp')
.factory('prodBench', function ($scope, $http) {
    

    // // Service logic
    // // ...
    // var meaningOfLife = 42;

    // // Public API here
    // return {
    //   someMethod: function () {
    //     return meaningOfLife;
    //   }
    // };

    // var client = new Faye.Client('https://api.cloud.dreamfactory.com:9292/bayeux');
    // var qString = "?app_name=envos-ru&fields=*";
    // var myDSP = 'https://dsp-go.cloud.dreamfactory.com/rest/db/prodBench/';

    Scope = $scope;
    $scope.Messages = [];
    $scope.subscription = client.subscribe('/prodBench', function (message) {
      $scope.$apply(function () {
        switch (message.action) {
          case "add":
          $scope.Bench.record.push(message.newData);
          break;
          case "update":
          updateByAttr($scope.Bench.record, 'id', message.newData.id, message.newData);
          break;
          case "delete":
          $("#row_" + message.newData.id).fadeOut();
          break;

        }


      });


    });
    $http.get(myDSP + qString).success(function (data) {
      $scope.Bench = data;
    });
    $scope.addItem = function () {
      $scope.bench.complete = false;
      $http.post(myDSP + qString, $scope.bench).success(function (data) {
        client.publish('/prodBench', {action: "add", newData: data});
        $scope.bench = {};
      });

    }
    $scope.updateItem = function () {
      var todo = this.bench;

      if (this.bench.complete === false) {
        this.bench.complete = true;
      } else {
        this.bench.complete = false;
      }
      $http.put(myDSP + qString, {id: todo.id}, todo).success(function (data) {
        client.publish('/prodBench', {action: "update", newData: data});


      });
    };
    $scope.deleteItem = function () {

      var id = this.bench.id;
      $http.delete(myDSP + id + qString).success(function (data) {
        client.publish('/prodBench', {action: "delete", newData: data});
      });
    }
    var updateByAttr = function (arr, attr1, value1, newRecord) {
      if (!arr) {
        return false;
      }
      var i = arr.length;
      while (i--) {
        if (arr[i] && arr[i][attr1] && (arguments.length > 2 && arr[i][attr1] === value1 )) {
          arr[i] = newRecord;
        }
      }
      return arr;
    };

  });