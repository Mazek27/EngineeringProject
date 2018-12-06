// import {login} from "../../../_services/session.api";


import {authenticate, resetPassword} from "../../../_services/session.api";



interface Authenticate {
    type : "AUTHENTICATE",
    payload : any
}

interface RestorePassword {
    type: "RESTORE_PASSWORD",
    payload: any
}

export type LoginFormAction = Authenticate | RestorePassword;

export function getAuthenticate(username : string, password : string) : Authenticate {
    return {
        type : "AUTHENTICATE",
        payload : authenticate(username, password)
    }
}

export function restorePassword(username : string) : RestorePassword {
    return {
        type : "RESTORE_PASSWORD",
        payload : resetPassword(username)
    }
}