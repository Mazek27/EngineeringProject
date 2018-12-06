import {authenticate, register} from "../session.api"

interface Login {
    type : "AUTHENTICATE"
    payload: Promise<any>
}

interface Logout {
    type : "LOGOUT"
}

export type SessionAction = Login | Logout;

export function AUTHENTICATE(user: string, pass: string): Login{
    return {
        type : "AUTHENTICATE",
        payload: authenticate(user, pass)
    }
}

export function logout(): Logout{
    return {
        type : "LOGOUT"
    }
}

