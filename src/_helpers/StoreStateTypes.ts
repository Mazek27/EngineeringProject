import {IResponseStatus} from "./constant";

export namespace StoreState {

    export type Session = {
        user : any
        isLogged : any
    }

    export type LoginModal = {
        username : string
        password : string
        isOpen : boolean
    }

    export type Language = {
        lang : any
    }

    export type Calendar = {
        responseStatus : IResponseStatus
        dsChecked : boolean
        currentDate : Date
        data : {[key : string]: any}[]
    }


    export type All = {
        session : Session
        loginModal : LoginModal
        lang : Language
        calendar : Calendar
        routing : any
    }

}