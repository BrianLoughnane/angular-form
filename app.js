angular.module('myApp',[])
	.controller('MyController', function($scope) {
		$scope.data = {
			country: undefined,
			title: undefined,
			confirm: undefined,
			gender: undefined,
			about_me: undefined,
			excitement: undefined
		};

		$scope.submit = function() {
			console.log('submitted', $scope.data);
			console.log('myForm', $scope.myForm.title.$error);
		};
	});