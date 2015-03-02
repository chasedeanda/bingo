(function(){
	var app = angular.module('app', []);

	app.controller("ApparelCtrl", [ '$http', '$scope', function($http, $scope){
		$scope.apparel = this;
		$scope.apparel.products = [];
		$http.get('js/json/apparel-list.json').success(function(data){
		  $scope.apparel.products = data;
		});
	}]);

	app.controller("GalleryCtrl", [ '$http', '$scope', function($http, $scope){
		$scope.gallery = this;
		$scope.gallery.activities = [];
		$http.get('js/json/activities-list.json').success(function(data){
		  $scope.gallery.activities = data;
		});
	}]);

	app.controller("TeamCtrl", [ '$http', '$scope', function($http, $scope){
		$scope.team = this;
		$scope.team.members = [];
		$http.get('js/json/team-list.json').success(function(data){
		  $scope.team.members = data;
		});
	}]);
})();