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

    export type Workouts = {
        responseStatus : IResponseStatus
        dsChecked : boolean
        currentDate : Date
        data : {[key : string]: any}[]
        selectedWorkout : any
    }


    export type All = {
        session : Session
        menuDrawer : MenuDrawer
        lang : Language
        workouts : Workouts
        router : any
    }

}