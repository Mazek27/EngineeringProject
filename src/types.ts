export namespace StoreState {

    export type NavBar = {
        toggle : () => void
        isCollapsed : boolean
    }

    export type Session = {
        user : any
        isLogged : any
        // token : string
        // language : string
    }

    export type LoginModal = {
        username : string,
        password : string,
        isOpen : boolean

    }

    export type Language = {
        lang : any;
    }


    export type All = {
        navBar : NavBar,
        session : Session,
        loginModal : LoginModal,
        translate : Language
    }

}