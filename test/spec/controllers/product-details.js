'use strict';

describe('Controller: ProductDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('envosMarketingApp'));

  var ProductDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductDetailsCtrl = $controller('ProductDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
