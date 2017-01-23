console.log('Whim')

angular.module('Whim', ['ngRoute'])
    .config(($routeProvider) => {
        $routeProvider
        .when('/', {
            controller: 'RootCtrl',
            templateUrl: '/partials/root.html'
        })
        .when('/HomePage/:home', {
            controller: 'HomeCtrl',
            templateUrl: '/partials/Category.html'
        })
    })

.controller('RootCtrl', function($scope, $location) {
    console.log('I am a RootCtrl')

    $scope.gotoCategory = () => {
        // change the Url
        $scope.gotoCategory = () => $location.url(`/HomePage/${$scope.home}`)
    }
})
