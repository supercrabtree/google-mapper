'use strict';

angular.module('googleMapperApp')
  .controller('MainCtrl', function ($scope, MapsGeocoder, BrowserDetector) {

    $scope.doSearch = function ($event, searchQuery) {
      // bluring the textfield hides the keyboard on mobile devices
      BrowserDetector.is.mobile && $event.target[0].blur();
      MapsGeocoder.search(searchQuery);
    };

  });
