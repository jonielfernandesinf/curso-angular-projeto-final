angular.module('app')
.controller('FrutasController', frutasController);
frutasController.$inject = ['FrutasService','$scope'];
function frutasController(frutasService, $scope){
    function init(){
        $scope.nomeFruta = '';
        frutasService.listarTodasFrutas().then(function (resultado) {
            $scope.frutas = resultado.data;
        });
    }
    $scope.incluir = function(){
        frutasService.incluir($scope.nomeFruta).then(function(){
            init();
        });
    };
    $scope.excluir = function(id){
        frutasService.deletar(id).then(function(){
            init();
        });
    };
    init();
}