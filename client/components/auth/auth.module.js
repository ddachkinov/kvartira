'use strict';

angular.module('kvartiraApp.auth', ['kvartiraApp.constants', 'kvartiraApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
