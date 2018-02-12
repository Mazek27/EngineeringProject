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
        isPending : boolean
        dsChecked : boolean
        date : {
            data : any[]
            month : number
            year : number
        }
    }


    export type All = {
        navBar : NavBar
        session : Session
        loginModal : LoginModal
        translate : Language
        calendar : Calendar
    }

}