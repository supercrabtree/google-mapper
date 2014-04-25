'use strict';

describe('Directive: shakeError', function () {

  // load the directive's module
  beforeEach(module('googleMapperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<shake-error></shake-error>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the shakeError directive');
  }));
});
