'use strict';

angular.module('googleMapperApp')
  .factory('MapsGeocoder', function () {

    var that;
    var geocoder = new google.maps.Geocoder();

    function MapsGeocoder() {
      that = this;
      _.mixin(this, new EventEmitter());
    }

    MapsGeocoder.prototype.search = function (query) {
      geocoder.geocode({address: query}, function (results) {
        if (results.length) {
          that.emit('searchComplete', results);
        } else {
          that.emit('searchError');
        }
      });
    };

    return new MapsGeocoder();
  });
