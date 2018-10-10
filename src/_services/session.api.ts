import {serverUrl} from "../_helpers/constant";
import {store} from "../_helpers/store";
import * as actions from "./session/session.action"
import {requestPost} from "./endpointConnection";


export function authenticate(userName : string, password : string) {
    return requestPost(`users/authenticate`, JSON.stringify({ userName, password }));
    // const requestOptions : RequestInit = {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'X-Requested-With': null,
    //         'Content-Type': 'application/json-patch+json',
    //     },
    //     body:
    // };
    //
    // return fetch(`${serverUrl}users/authenticate`, requestOptions)
    //     .then(response => {
    //         if(!response.ok) {
    //             throw Error(response.statusText)
    //         }
    //         store.dispatch(actions.login())
    //             return Promise.resolve(response.json())
    //     }).catch(error => {
    //         return Promise.reject(error)
    //     })
    // new Promise<any>(resolve =>

}

export function register(userName : string, password : string, phoneNumber : string, email : string, locale: string) {
    return requestPost(`${serverUrl}users/register`, JSON.stringify({ userName, password, email, phoneNumber, locale }))
    // const requestOptions : RequestInit = {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'X-Requested-With': null,
    //         'Content-Type': 'application/json-patch+json',
    //     },
    //     body:
    // };
    //
    // return fetch(, requestOptions)
    //     .then(response => {
    //         if(!response.ok) {
    //             throw Error(response.statusText)
    //         }
    //         return Promise.resolve(response.json())
    //     }).catch(error => {
    //         return Promise.reject(error)
    //     })
    // new Promise<any>(resolve =>

}