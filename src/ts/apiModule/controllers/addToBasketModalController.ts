namespace ApiModule {
    export class AddToBasketModalController {
        static $inject = ["$uibModalInstance", "ApiService", "obj"];

        public data: DataModel;
        public count: number = 1;
        public relaseDate;

        private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance;
        private apiService: ApiService;

        constructor($uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, apiService: ApiService, obj: DataModel) {
            this.apiService = apiService;
            this.$uibModalInstance = $uibModalInstance;
            this.data = obj;
            this.data.Release = null;
        }

        save() {
            this.data.Release = moment(this.relaseDate).unix();
            this.$uibModalInstance.close(this.data);
            this.apiService.addToBasket(this.data, this.count);
        }

        cancel() {
            this.$uibModalInstance.dismiss("cancel");
        }

    }
}