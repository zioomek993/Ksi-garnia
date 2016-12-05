namespace ServerModule {
    export class LocalStorageService {
        static $inject = [];

        constructor() { };

        public getItem(name: string) {
            let data = [];
            data = JSON.parse(localStorage.getItem(name));
            return data;
        }

        public setItem(name: string, value: any) {
            return localStorage.setItem(name, JSON.stringify(value));
        }

        public deleteItem(name: string) {
            return localStorage.removeItem(name);
        }
    };
};