namespace ApiModule {
    export class HeaderController {
        static $inject = ["$uibModal", "ApiService"];
        public basket: DataModel[];
        public len: number;
        public searchText: string;
        // private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        private options: ng.ui.bootstrap.IModalSettings;
        private apiService: ApiService;
        private $modal: ng.ui.bootstrap.IModalService;
        constructor($modal: ng.ui.bootstrap.IModalService, apiService: ApiService) {
            this.$modal = $modal;
            this.apiService = apiService;
            // this.$modalInstance = $modalInstance;
            this.getBasket();
            this.len = this.apiService.count;
            this.options = {
                animation: true,
                templateUrl: "ts/apiModule/views/basket.html",
                size: "lg",
                controller: ModalController,
                controllerAs: "vm",
                resolve: { item: () => this.basket }
            };
            this.apiService.eventScope.$on("cardCount", (ev: any, count: number) => {
                this.len = count;

            })
        }
        public changedSearchText(){
            this.apiService.searchText = this.searchText;
            this.apiService.eventScope.$broadcast("changeSearchText");
        }
        public getBasketCount() {
            this.len = this.apiService.count;
        }
        public openBasket() {
            this.getBasket();
            this.$modal.open(this.options).result;
        }
        public getBasket() {
            this.basket = this.apiService.getBasketData();
        }

    }
}