'use strict';

angular.module('googleMapperApp')
  .directive('shakeError', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.text('this is the shakeError directive');
      }
    };
  });
