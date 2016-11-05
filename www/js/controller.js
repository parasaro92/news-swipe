angular.module('starter', ['ionic', 'ionic.contrib.ui.cards'])

.controller('CardsCtrl', function($scope, $http, $ionicSwipeCardDelegate, $rootScope) {

  $rootScope.accepted = 0;
  $rootScope.rejected = 0;

  var cardTypes = [
    { title: 'Swipe down to clear the card', image: 'img/pic.png' },
    { title: 'Where is this place?', image: 'img/pic.png' },
    { title: 'What kind of Forest is this?', image: 'img/pic2.png' },
    { title: 'What beach is this?', image: 'img/pic3.png' },
    { title: 'What kind of questions are these?', image: 'img/pic4.png' }
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

  $scope.cardSwiped = function(index) {
    $scope.addCard();
  };

  $scope.cardDestroyed = function(index) {
    if (this.swipeCard.positive === true) {
      $scope.$root.accepted++;
    } else {
      $scope.$root.rejected++;
    }
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate, $rootScope) {
  // $scope.doAnything = function() {
  //   var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
  //   card.swipe();
  // };

   $rootScope.accept = function () {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    $rootScope.accepted++;
    card.swipe(true);
  }
  $scope.reject = function() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    $rootScope.rejected++;
    card.swipe();
  };
});