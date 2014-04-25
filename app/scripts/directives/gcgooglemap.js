'use strict';

angular.module('googleMapperApp')
  .directive('gcGoogleMap', function (BrowserDetector, MapsGeocoder) {

    function createNewMarker(map, results) {
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        animation: google.maps.Animation.DROP
      });
    }

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
      scope: {},
      link: function postLink(scope, element, attrs) {

        var map = new google.maps.Map(element[0], mapOptions);

        MapsGeocoder.on('searchComplete', function (results) {
          map.setCenter(results[0].geometry.location);
          createNewMarker(map, results);
        });
      }
    };
  });
