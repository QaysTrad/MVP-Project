var app = angular.module('shop', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/sign", {
        templateUrl : "app.html"
    })
});
app.controller('myctrl' , ['$scope' , '$http', function ($scope , $http ) {
	$scope.signclick = function () {
		var req = {
			method :'POST',
			url : '/users',
			data :{
				username : $scope.name , 
				password : $scope.number
			}
		}
		$http(req).then(function () {
			console.log('success')
		},function () {
			console.log('err')
		})
	}
	$scope.done = function () {
		var req = {
			method :'POST',
			url : '/users',
			data :{
				item : $scope.item , 
				price : $scope.price
			}
		}
		$http(req).then(function () {
			console.log('success')
		},function () {
			console.log('err')
		})
	}
		var recieve = {
			method :'GET',
			url : '/users'
		}
		$http(recieve).then(function (data) {
			console.log(data)
			})
}])
