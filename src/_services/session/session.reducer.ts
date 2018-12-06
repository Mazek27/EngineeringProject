import {StoreState} from "../../_helpers/StoreStateTypes";
import * as Cookies from "js-cookie";

function initState() {
    let user = Cookies.get("User");
    if(user && Cookies.get("Authorization")){
        return {
            isLogged : true,
            user : user
        }
    } else {
        return {
            isLogged : false,
            user : null
        }
    }
}

export const session = (state : StoreState.Session, action : any) => {
    if(!state){
        return initState();
    }

    switch(action.type){
        case "AUTHENTICATE_FULFILLED" : {
            let response = action.payload
            Cookies.set("Authorization", `Bearer ${response.token}`, {expires : response.expiration});
            Cookies.set("User", response.name)
            Cookies.set("locale", response.locale)

            return {
                ...state,
                user: response.name,
                isLogged: true
            }
        }
        case "AUTHENTICATE_REJECTED" : {
            Cookies.remove("user")
            Cookies.remove("Authorization")

            return {
                ...state,
            }
        }
        case "LOGOUT" : {
            return {
                ...state,
                isLogged : false,
                user : null
            }


        }
        default :
            return state
    }
};