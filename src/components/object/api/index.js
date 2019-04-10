import axios from "axios" ;
import baseUrl from "../base" ;

export default {
    requestGet : (url) => {
        return new Promise((resolve,reject) => {
            axios.get(baseUrl + url)
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            })
    
        })
    },
    requestPost : (url , params) => {
        return new Promise((resolve,reject) => {
            axios.get(baseUrl + url , params)
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            })
    
        })
    }
}