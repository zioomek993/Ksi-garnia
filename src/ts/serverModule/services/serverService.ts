// /// <reference path="../../common.d.ts" />


namespace ServerModule {
    export class ServerService {
        static $inject = ["$http", "LocalStorageService"];
        private localStorageService: LocalStorageService;
        private $http: ng.IHttpService;
        constructor($http: ng.IHttpService, localStorageService: LocalStorageService) {
            this.$http = $http;
            this.localStorageService = localStorageService;

        }

        public getHttp() {
            return this.$http.get("json/data.json");
        }
        public getLocalStorage(name: string) {
            return this.localStorageService.getItem(name);
        }
        public setLocalStorage(name: string, data: any[]) {
            this.localStorageService.setItem(name, data);
            return data;
        }

    }
}