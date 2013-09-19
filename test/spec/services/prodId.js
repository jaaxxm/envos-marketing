'use strict';

describe('Service: prodId', function () {

  // load the service's module
  beforeEach(module('envosMarketingApp'));

  // instantiate service
  var prodId;
  beforeEach(inject(function (_prodId_) {
    prodId = _prodId_;
  }));

  it('should do something', function () {
    expect(!!prodId).toBe(true);
  });

});
