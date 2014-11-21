(function () {

  angular.module('HolidayList')
    .factory('giftsFactory', ['$rootScope', '$http', function ($rootScope, $http) {

      var url = 'http://tiy-atl-fe-server.herokuapp.com/collections/wendysHolidayList/';


      function getGifts () {    //Getting all Gifts
        return $http.get(url);
      }

      function getGift (id) {   //Getting our single Gift
        return $http.get(url + id);
      }

      function addGift (gift) {
        $http.post(url, gift).success( function () {
          $rootScope.$broadcast('gift:added'); //naming here doesn't matter
        });
      }

      function editGift () {
        $http.edit(url, gift).success( function () {
          $rootScope.$broadcast('gift:edited')
        })



      }

      return {

        getGifts: getGifts,
        getGift: getGift,
        addGift: addGift

      };

  }]);


}());
