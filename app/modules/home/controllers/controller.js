// var app = angular.module('routerApp.site');

angular.module('sample.site', []).controller('NerdController', function ($scope, ContactService, $window) {
    console.log("inside controller-----");
    $scope.user = {};
    $scope.quantity = '';
    $scope.rate = '';
	$scope.total = 0;

    $scope.myFunc = function (val) {

        $scope.quantity = val;
    };

    $scope.myFunction = function (value) {
        $scope.rate = value;
        if ($scope.quantity && $scope.rate) {
            var value = $scope.quantity * $scope.rate;

            $scope.user = {
                description:$scope.user.description,
                amount: value,
                rate: $scope.rate,
                quantity: $scope.quantity
            }
        }

        // $scope.user.amount =  $scope.quantity * $scope.rate;
        console.log("$scope.user.amount", $scope.user.amount);
    };

    console.log("$window", $window.location);
    $scope.updateType = function (type) {
        console.log("type>>>", type);
        $scope.type = type;

    }
    $scope.submitDetails = function (data) {
        console.log("form data", data);
        ContactService.submitForm(data, function (res) {
            console.log("inside controller", res);
            $window.location.reload();
        });
    }
    $scope.normalList = [];
    $scope.importedList = [];
    $scope.localList = [];
    ContactService.getFormData(function (res) {
        console.log("inside controller", res);
        $scope.names = res.data;
        res.data.map(function (key, value) {
			console.log("sss",$scope.total,key.amount);
			$scope.total = $scope.total+key.amount;
			

        })
        console.log("normal", $scope.normalList);
        console.log("imported", $scope.importedList);
        console.log("local", $scope.localList);
    });

});