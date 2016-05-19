'use strict';

angular.module('kvartiraApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('kvartiri', {
        url: '/kvartiri',
        template: '<kvartiri></kvartiri>'
      });
  });
