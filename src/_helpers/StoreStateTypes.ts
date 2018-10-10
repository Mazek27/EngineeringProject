import {IResponseStatus} from "./constant";

export namespace StoreState {

    export type Session = {
        user : any
        isLogged : any
    }

    export type Language = {
        lang : any
    }

    export type MenuDrawer = {
        isOpen : boolean
    }

    export type Calendar = {
        responseStatus : IResponseStatus
        dsChecked : boolean
        currentDate : Date
        data : {[key : string]: any}[]
    }


    export type All = {
        session : Session
        menuDrawer : MenuDrawer
        lang : Language
        calendar : Calendar
        routing : any
    }

}