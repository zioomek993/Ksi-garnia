namespace ApiModule {
    export class ListController {
        static $inject = ["$uibModal", "ApiService"];

        public data: DataModel[];
        public item: DataModel;
        public typeSelected: number;

        private $modal: ng.ui.bootstrap.IModalService;
        private options: ng.ui.bootstrap.IModalSettings;
        private apiService: ApiService;

        constructor($modal: ng.ui.bootstrap.IModalService, apiService: ApiService) {
            this.apiService = apiService;
            this.$modal = $modal;
            this.typeSelected = 0;
            this.init();
            this.apiService.eventScope.$on("changeSearchText", () => {
                this.init();
            });
        }

        public addToCard(id: number) {
            this.item = this.data[id];
            this.item.Media = null;
            this.item.Cover = null;
            this.options = {
                animation: true,
                templateUrl: "ts/apiModule/views/form.html",
                size: "lg",
                controller: AddToBasketModalController,
                controllerAs: "vm",
                resolve: { obj: () => this.item }
            };
            this.$modal.open(this.options).result;
        }

        public changedCategory(type: number) {
            this.typeSelected = type;
            this.init();
        }

        public init() {
            this.apiService.getData(this.typeSelected).then((resault: any) => {
                this.data = resault;
            });
        }

    }
}