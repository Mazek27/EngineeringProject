import {StoreState} from "../../../types";

const initialState = {
    username : "",
    password : "",
    isOpen: false
};

export const loginModal = (state : StoreState.LoginModal, action : any): StoreState.LoginModal => {
    if(typeof state === 'undefined'){
        return initialState;
    }

    switch(action.type){
        case "TOGGLE_LOGIN_MODAL" : {
            return {
                ...state,
                isOpen : !state.isOpen
            }
        }
        case "LOG_IN_FULFILLED" : {
            localStorage.setItem('user', JSON.stringify(action.payload));
            // store.dispatch(actions.login());

            return {
                ...state,
            }
        }
        case "LOG_IN_REJECTED" : {
            localStorage.setItem('user', JSON.stringify(action.payload));

            return {
                ...state,
            }
        }
        case "LOGIN_FORM_USER_NAME_CHANGE" : {
            return {
                ...state,
                username : action.payload
            }
        }
        case "LOGIN_FORM_PASSWORD_CHANGE" : {
            return {
                ...state,
                password : action.payload
            }
        }
        default :
            return state
    }
}