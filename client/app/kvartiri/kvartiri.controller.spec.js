'use strict';

describe('Component: KvartiriComponent', function () {

  // load the controller's module
  beforeEach(module('kvartiraApp'));

  var KvartiriComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    KvartiriComponent = $componentController('KvartiriComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
