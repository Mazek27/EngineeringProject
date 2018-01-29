import {login} from "../../../_services/user.service";


interface Toggle {
    type : "TOGGLE_LOGIN_MODAL"
}

interface LogIn {
    type : "LOG_IN",
    payload : Promise<any>
}

export interface UserNameChange {
    type : "LOGIN_FORM_USER_NAME_CHANGE"
    payload : string
}

export interface PasswordChange {
    type : "LOGIN_FORM_PASSWORD_CHANGE"
    payload : string
}

export type LoginModalAction = Toggle | LogIn | UserNameChange | PasswordChange;

export function toggle() : Toggle {
    return {
        type : "TOGGLE_LOGIN_MODAL"
    }
}

export function logIn(username : string, password : string, isLogged : boolean) : LogIn {
    return {
        type : "LOG_IN",
        payload : login(username, password, isLogged)
    }
}

export function userNameChange(e : any) : UserNameChange {
    return {
        type : "LOGIN_FORM_USER_NAME_CHANGE",
        payload : e.target.value
    }
}

export function passwordChange(e : any) : PasswordChange {
    return {
        type : "LOGIN_FORM_PASSWORD_CHANGE",
        payload : e.target.value
    }
}