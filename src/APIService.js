import axios from 'axios';
const API_URL = 'http://c2:1880';
export class APIService{

constructor(){
}
    triggerEvent(){
        const url = `${API_URL}/api/`;
        return axios.post(url);
    }
}
