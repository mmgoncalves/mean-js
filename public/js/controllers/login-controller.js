angular.module('alurapic')
	.controller('LoginController', function($scope, $http, $location) {
		
		$scope.usuario = {}
		$scope.mensagem = '';

		$scope.autenticar = function() {
			var usuario = $scope.usuario;
			var senha = $scope.senha;

			$http.post('/autenticar', 
				{login: usuario.login, senha: usuario.senha})
				.then(function() {
					$location.path('/');
				}, function(error) {
					$scope.mensagem = 'Login ou senha inválidos';
				});
		};
	});