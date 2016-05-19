'use strict';

angular.module('kvartiraApp')
  .factory('kvartiraService', function($resource) {
    return $resource('/api/rooms/',{
        id: '@id'
      });
});
