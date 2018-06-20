import Http from './../Util/http';

export default class Service {
    constructor() {
        this.header = {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data' 
        }

        this.http = new Http();
    }
}