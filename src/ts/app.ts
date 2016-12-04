/// <reference path="common.d.ts" />

angular.module("Api", ["ui.router", "ngSanitize", "ngAnimate", "ui.bootstrap", "ApiModule", "ServerModule"])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise("/list");

        $stateProvider
            .state("list", {
                url: "/list:id",
                templateUrl: "ts/apiModule/views/list.html",
                controller: "ListController",
                controllerAs: "vm"
            });
});

