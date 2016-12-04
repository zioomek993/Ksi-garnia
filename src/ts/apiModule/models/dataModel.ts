/// <reference path="../../common.d.ts" />

namespace ApiModule {
    export class DataModel implements IDataModel {
        public id: number;
        public Name: string;
        public Release: number;
        public Price: string;
        public Author: string;
        public Publish: string;
        public Type: number;
        public SpecialOffer: boolean;

        constructor(data: IDataModel) {
            let keys = Object.keys(data);
             for (let i = 0, len = keys.length; i < len; i++) {
                let key = keys[i];
                this[key] = data[key];
            }
        }
        public parseData() {
            return moment.unix(this.Release).format("MM-DD-YYYY");
        }
    }
}