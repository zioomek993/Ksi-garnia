/// <reference path="../common.d.ts" />
namespace ServerModule {
    angular.module("ServerModule", [])
        .service("LocalStorageService", LocalStorageService)
        .service("ServerService", ServerService);
}