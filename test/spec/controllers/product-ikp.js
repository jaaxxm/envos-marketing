'use strict';

describe('Controller: ProductIkpCtrl', function () {

  // load the controller's module
  beforeEach(module('envosMarketingApp'));

  var ProductIkpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductIkpCtrl = $controller('ProductIkpCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
