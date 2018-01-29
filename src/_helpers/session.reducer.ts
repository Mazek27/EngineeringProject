import {StoreState} from "../types";

const initialState : StoreState.Session = {
    // language : localStorage.getItem("language") != null ? localStorage.getItem("language") : "en_US",
    isLogged : localStorage.getItem("authorization") != null,
    // token : localStorage.getItem("authorization"),
    user : {}
};

export const session = (state : StoreState.Session, action : any) => {
     if(typeof state === 'undefined'){
         return initialState;
     }

    switch(action.type){
        case 'LOGIN' :
            return {
                ...state,
                isLogged: true
        }

        case 'LOGOUT' :
            return {
                ...state,
                isLogged: false
            }
        default :
            return state;
    }
}