'use strict';

describe('Controller: ProductNkpCtrl', function () {

  // load the controller's module
  beforeEach(module('envosMarketingApp'));

  var ProductNkpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductNkpCtrl = $controller('ProductNkpCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
