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
        case "AUTHENTICATE_FULFILLED" : {
            let response = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload));

            return {
                ...state,
                user: response.name,
                isLogged: true
            }
        }
        case "AUTHENTICATE_REJECTED" : {
            localStorage.setItem('user', JSON.stringify(action.payload));

            return {
                ...state,
            }
        }
        default :
            return state
    }
};