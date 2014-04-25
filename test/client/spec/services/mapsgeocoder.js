'use strict';

describe('Service: Mapsgeocoder', function () {

  // load the service's module
  beforeEach(module('googleMapperApp'));

  // instantiate service
  var Mapsgeocoder;
  beforeEach(inject(function (_Mapsgeocoder_) {
    Mapsgeocoder = _Mapsgeocoder_;
  }));

  it('should do something', function () {
    expect(!!Mapsgeocoder).toBe(true);
  });

});
