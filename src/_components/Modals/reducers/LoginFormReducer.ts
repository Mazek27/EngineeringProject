import {StoreState} from "../../../_helpers/StoreStateTypes";

const initialState : StoreState.Session = {
    isLogged : !!localStorage.getItem('user'),
    user : ""
};

export const loginFormReducer = (state : StoreState.Session, action : any): StoreState.Session => {
    if(typeof state === 'undefined'){
        return initialState;
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
}