// import {login} from "../../../_services/session.api";


import {authenticate} from "../../../_services/session.api";


interface Authenticate {
    type : "AUTHENTICATE",
    payload : any
}

export type LoginFormAction = Authenticate;

export function getAuthenticate(username : string, password : string) : Authenticate {
    return {
        type : "AUTHENTICATE",
        payload : authenticate(username, password)
    }
}