angular.module('app', [
    'ngRoute',
    'frutasServiceApp',
    'clientesServiceApp'
])
    .config(['$routeProvider', '$locationProvider', definirRotas]);

function definirRotas($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.
        when('/frutas', {
            controller: 'FrutasController',
            templateUrl: 'frutas/frutas.html'
        }).when('/clientes', {
            controller: 'ClientesController',
            templateUrl: 'clientes/clientes.html'
        }).
        otherwise({ redirectTo: '/frutas' });

}