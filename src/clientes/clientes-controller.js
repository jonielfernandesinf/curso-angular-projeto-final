angular.module('app')
.controller('ClientesController', clientesController);
clientesController.$inject = ['ClientesService','$scope'];
function clientesController(clientesService, $scope){
    function init(){
        $scope.mensagemErro = '';
        $scope.cliente = {
            nome: undefined,
            dataNascimento: undefined,
            email: undefined,
            cpf: undefined,
        };
        clientesService.listarTodosClientes().then(function (resultado) {
            $scope.frutas = resultado.data;
        });
    }
    $scope.incluir = function(){
        $scope.mensagemErro = '';
        clientesService.incluir($scope.cliente).then(function(){
            init();
        }).catch(function(error){
            console.log('deu erro', error);
            $scope.mensagemErro = error.data.message;
        });
    };
    $scope.excluir = function(id){
        $scope.mensagemErro = '';
        clientesService.deletar(id).then(function(){
            init();
        });
    };
    init();    

    $scope.$watch('cliente.cpf', function() {
        $scope.cliente.cpf = formatarCPF($scope.cliente.cpf);
    });

    function formatarCPF(input){
        var str = input + '';
        if (str.length <= 14) {
            str = str.replace(/\D/g, '');
            str = str.replace(/(\d{3})(\d)/, '$1.$2');
            str = str.replace(/(\d{3})(\d)/, '$1.$2');
            str = str.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        }else{
            return str.substring(0, 14);
        }

        return str;
    }

    $scope.$watch('cliente.dataNascimento', function() {
        $scope.cliente.dataNascimento = formatarData($scope.cliente.dataNascimento);
    });

    function formatarData(input){
        var str = input + '';

        if (str.length <= 10) {
            str = str.replace(/\D/g, '');
            str = str.replace(/(\d{2})(\d)/, '$1/$2');
            str = str.replace(/(\d{2})(\d)/, '$1/$2');
        }else{
            return str.substring(0, 10);
        }

        return str;
    }
}