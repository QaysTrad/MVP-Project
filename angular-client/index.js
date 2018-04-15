var app = angular.module('shop', []);

app.controller('myctrl' , ['$scope' , '$http', function ($scope , $http) {
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
}])