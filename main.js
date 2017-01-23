console.log('Whim')

angular.module('Whim', ['ngRoute'])
    .config(($routeProvider) => {
        $routeProvider
        .when('/', {
            controller: 'RootCtrl',
            templateUrl: '/partials/root.html'
        })
        .when('/homePage/:home', {
            controller: 'HomeCtrl',
            templateUrl: '/partials/category.html'
        })
    })

.controller('RootCtrl', function($scope, $location) {
    console.log('I am a RootCtrl')

    $scope.gotoCategory = () => {
        // change the Url
        $scope.gotoCategory = () => $location.url(`/homePage/${$scope.home}`)
    }
})

.controller('HomeCtrl', function($scope, $routeParams, categoryFactory) {
    console.log('I am a HomeCtrl')

    categoryFactory.getCategory($routeParams.homePage)
        .then((category) => {
            $scope.exploration = category.exploration
            $scope.food = category.food
            $scope.nature = category.nature
            $scope.odd = category.odd
            $scope.sports = category.sports
            $scope.cars = category.cars
            $scope.music = category.music

        })
})
