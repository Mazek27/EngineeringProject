import {serverUrl} from "../_helpers/constant";
import {requestPost, requestGet} from "./endpointConnection";

export function authenticate(userName : string, password : string) {
    return requestPost(`users/authenticate`, JSON.stringify({ userName, password }));
}


export function register(userName : string, password : string, phoneNumber : string, email : string, locale: string) {
    return requestPost(`${serverUrl}users/register`, JSON.stringify({ userName, password, email, phoneNumber, locale }))
}

export function resetPassword(userName : string) {
    return requestGet(`users/resetpassword?userName=${userName}`)
}
