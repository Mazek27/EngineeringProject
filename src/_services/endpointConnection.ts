import axios, {AxiosRequestConfig} from "axios";
import {store} from "../_helpers/store";
import {logout} from "./session/session.action";

let api_path = "https://pms-model-editor-server.herokuapp.com/service/";
// let api_path = "http://localhost:8081/service/";

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
            if(response.status == 401){
                store.dispatch(logout)
            } else {
                return Promise.resolve(response.data)
            }
        })
        .catch(()=>{

        })

}

function extendHeadersWithAuthentication(axiosConfig: AxiosRequestConfig) {
    let config : AxiosRequestConfig = {
        headers : {

        }
    }
    return {
        ...config,
        headers : { ...config.headers , Authorization : localStorage.getItem("authorization")}}
}