import {serverUrl} from "../_helpers/constant";
import {store} from "../_helpers/store";
import * as actions from "../_helpers/session.action"


export function login(userName : string, password : string, isLogged : boolean) {
    const requestOptions : RequestInit = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': null,
            'Content-Type': 'application/json-patch+json',
        },
        body: JSON.stringify({ userName, password })
    };

    return fetch(`${serverUrl}users/authenticate`, requestOptions)
        .then(response => {
            if(!response.ok) {
                throw Error(response.statusText)
            }
            store.dispatch(actions.login())
                return Promise.resolve(response.json())
        }).catch(error => {
            return Promise.reject(error)
        })
    // new Promise<any>(resolve =>

}

export function register(userName : string, password : string, phoneNumber : string, email : string, locale: string) {
    const requestOptions : RequestInit = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': null,
            'Content-Type': 'application/json-patch+json',
        },
        body: JSON.stringify({ userName, password, email, phoneNumber, locale })
    };

    return fetch(`${serverUrl}users/register`, requestOptions)
        .then(response => {
            if(!response.ok) {
                throw Error(response.statusText)
            }
            return Promise.resolve(response.json())
        }).catch(error => {
            return Promise.reject(error)
        })
    // new Promise<any>(resolve =>

}