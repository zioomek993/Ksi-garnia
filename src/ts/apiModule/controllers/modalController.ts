namespace ApiModule {
    export class ModalController {
        static $inject = ["$uibModalInstance", "ApiService"];

        public data: DataModel[];

        private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance;
        private apiService: ApiService;

        constructor($uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, apiService: ApiService) {
            this.apiService = apiService;
            this.$uibModalInstance = $uibModalInstance;
            this.data = apiService.getBasketData();
        }

        save() {
            this.$uibModalInstance.close(this.data);
        }

        cancel() {
            this.$uibModalInstance.dismiss("cancel");
        }

        public deleteItem(id: number) {
            this.apiService.deleteFromBasket(id);
            this.data = this.apiService.getBasketData();
        }
    }
}