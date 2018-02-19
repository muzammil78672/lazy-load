angular.module('myApp', ['ngRoute', 'angularLazyImg'])

    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'view/view.html',
            controller: 'ViewCtrl'
        });
        $locationProvider.hashPrefix();

        $routeProvider.otherwise({redirectTo: '/'});
    }])

    .constant('BASE_URL','https://picsum.photos/')

    .controller('ViewCtrl', ['$scope','$http','BASE_URL','$rootScope',function($scope,$http,BASE_URL,$rootScope) {
        $scope.status = true;
        $rootScope.media_url = BASE_URL+'200/300?image=';
        $scope.initView = function () {
            $http.get(BASE_URL + 'list').then(function (success) {
                $scope.images = success.data;
                $scope.status = false;

            })
        }

    }]);
