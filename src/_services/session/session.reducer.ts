import {StoreState} from "../../_helpers/StoreStateTypes";

function initState() {
    let user = localStorage.getItem("user");
    if(user === null){
        return {
            isLogged : false,
            user : null
        }
    } else {
        return {
            isLogged : true,
            user : JSON.parse(user)
        }
    }
}

export const session = (state : StoreState.Session, action : any) => {
    if(typeof state === 'undefined'){
        return initState();
    }

    switch(action.type){
        case 'LOGIN' :
            return {
                ...state,
                isLogged: true,
            };

        case 'LOGOUT' :
            return {
                ...state,
                isLogged: false
            };
        default :
            return state;
    }
};