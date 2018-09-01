
var routerApp = angular.module('routerApp', ['ui.router',"sample.site","sample.service"]);
// angular.module('routerApp.controller', []);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            controller:'NerdController',
            templateUrl: 'app/modules/home/views/home_asd.html',
           
        })
        //LIST
        .state('list', {
            url: '/list',
            controller:'NerdController',
            templateUrl: 'app/modules/home/views/formlist.html',
           
        })
            
});

routerApp.controller('column1Controller', function($scope) {
    
    $scope.message = 'column1';
    console.log("abc");
   
    $scope.galaxies = [
        {
            name: 'Milkyway Galaxy',
            distance: '27,000'
        },
        {
            name: 'Andromeda Galaxy',
            distance: '2,560,000'
        },
        {
            name: 'Sagittarius Dwarf',
            distance: '3.400,000'
        }
    ];
});