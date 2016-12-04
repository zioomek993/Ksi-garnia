/// <reference path="../common.d.ts" />
namespace ApiModule {
    angular.module("ApiModule", [])
        .controller("ListController", ListController)
        .controller("HeaderController", HeaderController)
        .controller("ModalController", ModalController)
        .controller("AddToBasketModalController", AddToBasketModalController)
        .service("ApiService", ApiService);

}