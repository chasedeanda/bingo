(function(){
	var app = angular.module('app', []);

	app.controller("ApparelCtrl", [ '$http', function($http){
		var apparel = this;
		apparel.products = [];
		$http.get('http://bingo93.com/js/json/apparel-list.json').success(function(data){
		  apparel.products = data;
		});
	}]);

	app.controller("ActivitiesCtrl", [ '$http', function($http){
		var apparel = this;
		apparel.products = [];
		$http.get('http://bingo93.com/js/json/activities-list.json').success(function(data){
		  apparel.products = data;
		});
	}]);
})();