import {IResposneStatus} from "./_helpers/constant";

export namespace StoreState {

    export type NavBar = {
        toggle : () => void
        isCollapsed : boolean
    }

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
        responseStatus : IResposneStatus
        dsChecked : boolean
        currentDate : Date
        data : {[key : string]: any}[]
    }


    export type All = {
        navBar : NavBar
        session : Session
        loginModal : LoginModal
        translate : Language
        calendar : Calendar
    }

}