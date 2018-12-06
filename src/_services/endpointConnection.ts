import axios, {AxiosRequestConfig} from "axios";
import {store} from "../_helpers/store";
import {logout} from "./session/session.action";
import * as Cookies from "js-cookie";

let api_path = "http://192.168.0.19:10000/api/";

export function requestGet(path: string, headers?:{}){
    return execute(
        axios.get(api_path + path, extendHeadersWithAuthentication(headers))
    )
}

export function requestPost(path: string, data : any, headers?:{}){
    return execute(
        axios.post(api_path + path, data, extendHeadersWithAuthentication(headers))
    )
}

export function requestPut(path: string, data : any, headers?:{}){
    return execute(
        axios.put(api_path + path, data, extendHeadersWithAuthentication(headers))
    )
}

export function requestDelete(path: string, headers?:{}){
    return execute(
        axios.delete(api_path + path, extendHeadersWithAuthentication(headers))
    )
}

function execute(requestPromise: Promise<any>): Promise<any> {
    return requestPromise
        .then(response => {
            return Promise.resolve(response.data)
        })
        .catch((error)=>{
            // if(error.response.status == 401) {
            //     store.dispatch(logout())
            // }
        })

}

function extendHeadersWithAuthentication(axiosConfig: AxiosRequestConfig) {
    let config : AxiosRequestConfig = {
        headers : {
            'content-type': 'application/json; charset=utf-8 '
        }
    }
    let authorization = Cookies.get("Authorization")
    return {
        ...config,
        headers : { ...config.headers , Authorization : authorization}}
}