'use strict';

angular.module('googleMapperApp')
  .directive('shakeError', function (MapsGeocoder, $timeout) {
    return {
      restrict: 'A',
      scope: {},
      link: function postLink(scope, element, attrs) {

        var shakeClasses = ['shake', 'shake-little', 'shake-constant', 'shake-horizontal', 'search-error'];

        function shake() {
          _.forEach(shakeClasses, function (klass) {
            element.addClass(klass);
          });
          $timeout(fadeText, 400);
          $timeout(unshake, 500);
        }

        function unshake() {
          _.forEach(shakeClasses, function (klass) {
            element.removeClass(klass);
          });
        }

        function fadeText() {
          element.addClass('fade-text');
          $timeout(reset, 500);
        }

        function reset() {
          element.val(null);
          element.removeClass('fade-text');
        }

        MapsGeocoder.on('searchError', function () {
          shake();
        });
      }
    };
  });
