'use strict';

describe('Service: prodBench', function () {

  // load the service's module
  beforeEach(module('envosMarketingApp'));

  // instantiate service
  var prodBench;
  beforeEach(inject(function (_prodBench_) {
    prodBench = _prodBench_;
  }));

  it('should do something', function () {
    expect(!!prodBench).toBe(true);
  });

});
