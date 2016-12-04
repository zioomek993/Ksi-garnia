namespace ApiModule {
    export interface IDataModel {
        id: number;
        Name: string;
        Release: number;
        Price: string;
        Author: string;
        Publish: string;
        Type: number;
        SpecialOffer: boolean;
    }
    export class ApiService {
        static $inject = ["ServerService", "$q", "$rootScope"];

        public data: DataModel[];
        public card: DataModel[];
        public count: number;
        public searchText: string = "";
        public eventScope: ng.IScope;

        private qService: ng.IQService;
        private serverService: ServerModule.ServerService;

        constructor(serverService: ServerModule.ServerService, $q: ng.IQService, rootScope: ng.IRootScopeService) {
            this.serverService = serverService;
            this.qService = $q;
            this.eventScope = rootScope.$new();
            this.init();
            this.count = this.countItems();
        }

        static createDataModel(data: IDataModel[]): DataModel[] {
            let list: DataModel[] = [];
            for (let i = 0, len = data.length; i < len; i++) {
                list.push(new DataModel(data[i]));
            }
            return list;
        }
        public sortData(item: any, type: number) {
            let items = [];

            for (let i = 0, len = item.length; i < len; i++) {
                if (type === 3) {
                    let date: number = moment().unix();
                    let days: number = 14 * 60 * 60 * 24;
                    let minDate: number = date - days;
                    if (item[i].Release >= minDate && item[i].Release <= date) {
                         if (item[i].Author.toLowerCase().search(this.searchText.toLowerCase()) !== -1 || item[i].Name.toLowerCase().search(this.searchText.toLowerCase()) !== -1) {
                        items.push(item[i]);
                    }
                    }
                   
                } else if (type === 4) {
                    let date: number = moment().unix();
                    let days: number = 14 * 60 * 60 * 24;
                    let maxDate: number = date + days;
                    if (item[i].Release <= maxDate && item[i].Release >= date) {
                         if (item[i].Author.toLowerCase().search(this.searchText.toLowerCase()) !== -1 || item[i].Name.toLowerCase().search(this.searchText.toLowerCase()) !== -1) {
                        items.push(item[i]);
                    }
                    }
                } else if (type === 5) {
                    if (item[i].Author.toLowerCase().search(this.searchText.toLowerCase()) !== -1 || item[i].Name.toLowerCase().search(this.searchText.toLowerCase()) !== -1) {
                        items.push(item[i]);
                    }
                } else if (item[i].Type === type || type === 0) {
                    if (item[i].Author.toLowerCase().search(this.searchText.toLowerCase()) !== -1 || item[i].Name.toLowerCase().search(this.searchText.toLowerCase()) !== -1) {
                        items.push(item[i]);
                    }

                }
            }



            return items;
        }
        public getData(type?: number) {
            return this.qService((resolve, reject) => {
                this.serverService.getHttp().then((result: { data: any }) => {
                    let sort: DataModel[] = this.sortData(result.data, type);
                    if (sort.length === 0 && this.searchText !== "") {
                        this.searchText = "";
                        sort = this.sortData(result.data, type);
                    }
                    let modelList = ApiService.createDataModel(sort);
                    resolve(modelList);
                }).catch((error) => {
                    reject(error);
                });
            });
        }
        public getBasketData(): DataModel[] {
            let basket: DataModel[] = this.serverService.getLocalStorage("basket");
            let model: DataModel[];
            if (basket === null || basket === undefined) {
                basket = [];
                model = basket;
            } else {
                model = ApiService.createDataModel(basket);
            }
            return model;
        }
        public setBasketData(data: any[]) {
            this.serverService.setLocalStorage("basket", data);
        }
        public addToBasket(obj: any, count: number = 1): DataModel[] {
            this.init();
            for (let i = 0; i < count; i++) {
                this.card.push(obj);
            }
            this.countItems();
            this.setBasketData(this.card);
            return this.card;


        }
        public countItems(add?: boolean) {
            if (add === true) {
                this.count = this.count + 1;
            } else if (add === false) {
                this.count = this.count - 1;
            } else {
                if (this.card === null || this.card.length === undefined) {
                    this.card = [];
                }
                this.count = this.card.length;
            }
            this.eventScope.$broadcast("cardCount", this.count);
            return this.count;

        }
        public deleteFromBasket(id: number) {
            this.card.splice(id, 1);
            this.countItems();
            this.setBasketData(this.card);
        }
        private init() {
            this.card = this.getBasketData();
            if (this.card.length === 0 || this.card.length === undefined) {
                this.card = [];
            }
        }
    }

}