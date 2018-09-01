var app = angular.module('sample.service', []);
app.service('ContactService', function ($http) {

    this.submitForm = function (data,callBack) {
        console.log("inside service");
         $http({
                method: "POST",
                url: "/save",
                data:data
            }).then(function mySucces(response) {
                console.log("response", response);
                callBack(response);
                // $scope.myWelcome = response.data;
            }, function myError(response) {
                console.log("errr res", response.statusText);
                callBack(response);
                // $scope.myWelcome = response.statusText;
            });


    }  
    this.getFormData = function (callBack) {
        console.log("inside service");
         $http({
                method: "GET",
                url: "/getlist"
            }).then(function mySucces(response) {
                console.log("response", response);
                callBack(response);
                // $scope.myWelcome = response.data;
            }, function myError(response) {
                console.log("errr res", response.statusText);
                callBack(response);
                // $scope.myWelcome = response.statusText;
            });


    }

});