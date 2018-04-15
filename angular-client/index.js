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
			console.log('success' )
		},function () {
			console.log('err')
		})
		rec()
	}
	var rec = function () {
		var recieve = {
			method :'GET',
			url : '/users'
		}
		$http(recieve).then(function (data) {
			var arr = [];
			for (var i = 0; i < data['data'].length; i++) {
				if(!data['data'][i].hasOwnProperty('username'))
					
				arr.push(data['data'][i])
			}
			$scope.items = arr
			})
	}
	$scope.init = function () {
		rec();
	}	
}])
