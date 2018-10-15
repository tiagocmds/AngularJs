angular.module('alurapic').controller('FotosController', function($scope, $http){
	
	$scope.fotos = [];
	/*{
		titulo : 'Leao',
		url: 'https://img.dgabc.com.br/Imagens/20161128103649.jpg'
	},
	{
		titulo : 'Leao 2',
		url: 'https://img.dgabc.com.br/Imagens/20161128103649.jpg'
	},*/

	/*var promise = $http.get('v1/fotos');
	promise.then(function(retorno){
		$scope.fotos = retorno.data;
	}).catch(function(error){
		console.log(error);
	})*/

	$http.get('v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.error(function(erro){
		console.log(erro);
	});
	
});
