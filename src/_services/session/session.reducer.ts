import {StoreState} from "../../_helpers/StoreStateTypes";

function initState() {
    let user = localStorage.getItem("user");
    console.log(user);
    if(user){
        return {
            isLogged : true,
            user : JSON.parse(user)
        }
    } else {
        return {
            isLogged : false,
            user : null
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