angular.module('frutasServiceApp',[])
.service('FrutasService', frutasService);

function frutasService($http){
    var URL = 'https://ng-curso-api.herokuapp.com/frutas';
    return {
        listarTodasFrutas : function(){
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