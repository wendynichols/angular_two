(function () {

  angular.module('HolidayList')
  .controller('EditController',
  ['$scope','$routeParams','$location','giftsFactory','$rootScope',
  function ($scope,  $routeParams,  $location,  giftsFactory,  $rootScope) {

    giftsFactory.getGift($routeParams.id).success( function (data) {
      $scope.gift = data;
    });

    $scope.editGift = function(gift) {
      giftsFactory.editGift(gift);
      $rootScope.$on('gift:editted', function (){
        $location.path('/');
      });
    }

    $scope.deleteGift = function(gift) {
      giftsFactory.deleteGift(gift);
      $rootScope.$on('gift:deleted', function(){
        $location.path('/');
      });

    };

  }]);

}());
