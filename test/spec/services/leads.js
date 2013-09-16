'use strict';

describe('Service: leads', function () {

  // load the service's module
  beforeEach(module('envosMarketingApp'));

  // instantiate service
  var leads;
  beforeEach(inject(function (_leads_) {
    leads = _leads_;
  }));

  it('should do something', function () {
    expect(!!leads).toBe(true);
  });

});
