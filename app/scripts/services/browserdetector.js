'use strict';

angular.module('googleMapperApp')
  .factory('BrowserDetector', function () {

    function BrowserDetector() {
      this.is = {
        android:    new RegExp(/Android/i).test(navigator.userAgent),
        blackBerry: new RegExp(/BlackBerry/i).test(navigator.userAgent),
        iPhone:     new RegExp(/iPhone/i).test(navigator.userAgent),
        iPad:       new RegExp(/iPad/i).test(navigator.userAgent),
        opera:      new RegExp(/Opera Mini/i).test(navigator.userAgent),
        windows:    new RegExp(/IEMobile/i).test(navigator.userAgent),
      };
      this.is.iOS = this.is.iPhone || this.is.iPad;
      this.is.mobile = this.is.android || this.is.blackBerry || this.is.iOS || this.is.opera || this.is.windows;
    }

    return new BrowserDetector();
  });
