/// <reference path="../angular.js" />

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.controller('FullStackEngineerProgrammingEvaluation', ['$scope', '$http', '$uibModal', function ($scope, $http, $uibModal) {

    // This key is stored in the config.js file. View README for more info. 
    var apiKey = config.API_KEY;

    $scope.symbols;
    $scope.modifiedSymbols;
    $scope.searchString = '';
    $scope.searchStringInput = '';

    $scope.onLoad = function () {

        $scope.getCurrencyPairSymbols();
    };

    // Remove all non-alpha characters so that filtering will work with or without whitespace and arrows added. 
    $scope.createSearchString = function () {
        $scope.searchString = $scope.searchStringInput.replace(/[^a-zA-Z]/gi, '');
    };

    // Get currency pair symbols from 1 Forge API
    $scope.getCurrencyPairSymbols = function () {

        $scope.symbols = {};
        $scope.modifiedSymbols = [];

        $http.get('api/API/getCurrencyPairSymbols?apiKey=' + apiKey)
            .then(function (response) {
                $scope.symbols = response.data;
                // For each reacord, create a modified symbol: three character currency then arrow then three charecter currency, and store it along with the original symbol.
                $scope.symbols.forEach(function (record) {
                    $scope.modifiedSymbols.push({ modifiedSymbol: record.substring(0, 3) + ' -> ' + record.substring(3), symbol: record });
                });
                console.log('getCurrencyPairSymbols: ' + response.status + ' - ' + response.statusText);
            })
            .catch(function (response) {
                console.log('getCurrencyPairSymbols: ' + response.status + ' - ' + response.statusText);
            });
    };

    // Open Quote Modal
    $scope.openQuoteModal = function (currencyPairSymbol) {

        var modalInstance = $uibModal.open({
            animation: false,
            templateUrl: 'QuoteModal.html',
            controller: 'QuoteModalInstanceCtrl',
            size: 'md',
            resolve: {
                currencyPairSymbol: function () {
                    return currencyPairSymbol;
                }
            }
        });
    };

}]);

// Quote Modal Controller
app.controller('QuoteModalInstanceCtrl', ['$scope', '$http', '$uibModalInstance', 'currencyPairSymbol', function ($scope, $http, $uibModalInstance, currencyPairSymbol) {

    // This key is stored in the config.js file. View README for more info. 
    var apiKey = config.API_KEY;

    $scope.quoteData;

    // Execute the following as soon as the modal opens
    $uibModalInstance.opened.then(function () {

        $scope.getQuote();

    });

    // Get quote from from 1 Forge API
    $scope.getQuote = function () {

        $scope.quoteData = {};

        $http.get('api/API/getQuote?apiKey=' + apiKey + '&currencyPairSymbol=' + currencyPairSymbol)
            .then(function (response) {
                $scope.quoteData = response.data[0];
                console.log('getQuote: ' + response.status + ' - ' + response.statusText);
            })
            .catch(function (response) {
                console.log('getQuote: ' + response.status + ' - ' + response.statusText);
            });
    };

    // Close Modal
    $scope.cancel = function () {
        $uibModalInstance.close();
    };
}]);