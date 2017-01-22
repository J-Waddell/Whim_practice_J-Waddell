console.log('Whim')

angular.module('Whim', ['ngroute'])
    .config(($routeProvider) => {
        $routeProvider
        .when('/', {
            controller: 'RootCtrl',
            templateUrl: '/partials/root.html'
        })
    })