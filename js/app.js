//create Angular Module
var TicTacToeBot = angular.module('TicTacToeBot', ['ngRoute']);

//configure routes
TicTacToeBot.config(function($routeProvider){

	//TicTacToeBot
		$routeProvider.when('/', {
		templateUrl : 'views/TicTacToeBot.html',
		controller  : 'TicTacToeBotCtrl'
		});

});

//main Bot Controller
TicTacToeBot.controller('TicTacToeBotCtrl', ['$scope', function($scope){

	$scope.message = "hey";
	$scope.turn = 'player';
	$scope.team = '';

	$scope.coords = {
		'A1' : 'blank',
		'A2' : 'blank',
		'A3' : 'blank',
		'B1' : 'blank',
		'B2' : 'blank',
		'B3' : 'blank',
		'C1' : 'blank',
		'C2' : 'blank',
		'C3' : 'blank',
	};

	$scope.checkWinner = function(){
		//straight along the top
		if (coords.A1 == coords.A2 && coords.A2 == coords.A3){
			return coords.A1;
		}
		//straight along the middle
		if (coords.B1 == coords.B2 && coords.B2 == coords.B3){
			return coords.B1;
		}
		//straight along the bottom
		if (coords.C1 == coords.C2 && coords.C2 == coords.C3){
			return coords.C1;
		}
		//down the left
		if (coords.A1 == coords.B1 && coords.B1 == coords.C1){
			return coords.A1;
		}
		//down the middle
		if (coords.A2 == coords.B2 && coords.B2 == coords.C2){
			return coords.A2;
		}
		//down the right
		if (coords.A3 == coords.B3 && coords.B3 == coords.C3){
			return coords.A3;
		}
		//diagonal from top right
		if (coords.A1 == coords.B2 && coords.B2 == coords.C3){
			return coords.A1;
		}
		//diagonal from top left
		if (coords.A3 == coords.B2 && coords.B2 == coords.C1){
			return coords.A3;
		}
		else return "noWinner";
	}

	$scope.makeMove = function(){

	}

	$scope.A1 = function(){
		window.alert("A1");
	}

}]);
