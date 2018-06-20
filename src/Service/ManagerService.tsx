import Service from './service';
import Setting from './../Util/setting';


export default class ManagerService extends Service {
    post(callback, check) {
        this.http.post(Setting.SERVER_API + check.url, check.data, this.header)
        .then(response => {
            return response.text();
        })
        .then(responseJson => {
            console.log('response Json')
            console.log(responseJson)
            callback(JSON.parse(responseJson))
        })
    }
}