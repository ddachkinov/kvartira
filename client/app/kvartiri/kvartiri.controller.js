'use strict';
(function(){

class KvartiriComponent {
  constructor($http, $scope, socket, kvartiraService, $state) {
    kvartiraService.query(function(rooms){
        $scope.rooms = rooms;
        socket.syncUpdates('room', $scope.rooms);
      });
    this.$http = $http;
    this.socket = socket;
    this.rooms = [];
  }
//  $onInit() {
//  this.$http.get('/api/rooms').then(response => {
//    this.rooms = response.data;
//    this.socket.syncUpdates('rooms', this.rooms);
//  });
//}

}

angular.module('kvartiraApp')
  .component('kvartiri', {
    templateUrl: 'app/kvartiri/kvartiri.html',
    controller: KvartiriComponent
  });

})();
