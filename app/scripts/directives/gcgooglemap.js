'use strict';

angular.module('googleMapperApp')
  .directive('gcGoogleMap', function () {
    return {
      template: '<div id="google-map"></div>',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var mapOptions = {
          center: new google.maps.LatLng(52.5199, 13.406239),
          zoom: 8
        };
        var map = new google.maps.Map(element[0], mapOptions);
      }
    };
  });
