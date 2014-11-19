(function () {

  angular.module('HolidayList')

  .controller('GiftsController',
    ['$scope', 'giftsFactory', '$location', '$rootScope',
     function($scope, giftsFactory, $location, $rootScope) {

      giftsFactory.getGifts().success( function(data) {
        $scope.gifts = data;
      });


    $scope.addGift = function (gift) {
          giftsFactory.addGift(gift);

          $rootScope.$on('gift:added', function () {
            $location.path('/');
          });

        },

    $scope.editGift = function () {
      giftsFactory.editGift();

      $rootScope.$on('gift:edited', function () {
        $location.path('/');
      });
    }


    }]);
}());
