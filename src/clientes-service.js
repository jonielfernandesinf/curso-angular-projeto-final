angular.module('clientesServiceApp',[])
.service('ClientesService', clientesService);

function clientesService($http){
    var URL = 'https://ng-curso-api.herokuapp.com/clientes';
    return {
        listarTodosClientes : function(){
            return $http.get(URL);
        },
        incluir: function(nome) {

            return $http.post(URL, nome);
        },
        deletar: function(id) {

            var parametros = {
                data: id,
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                }
            };

            return $http.delete(URL, parametros);
        }
    };
}