'use strict';

angular.module('googleMapperApp')
  .directive('gcGoogleMap', function (BrowserDetector) {

    var mapOptions = {
      center: new google.maps.LatLng(52.5199, 13.406239), // Berlin
      zoom: 10,
      disableDefaultUI: true
    };

    if (!BrowserDetector.is.mobile) {
      mapOptions.zoomControl = true;
      mapOptions.zoomControlOptions = {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      };
    }

    return {
      template: '<div id="google-map"></div>',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var map = new google.maps.Map(element[0], mapOptions);
      }
    };
  });
