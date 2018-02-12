import {languages} from "../../../_helpers/translate";
import {StoreState} from "../../../types";

// const initState = {
//     lang : JSON.parse(sessionStorage.getItem('user')).locale === 'undefine' ? languages["pl_PL"] : JSON.parse(sessionStorage.getItem('user')).locale
// }

export const language = (state : StoreState.Language, action : any) : StoreState.Language => {
    if(typeof state === 'undefined'){
        //let ssUser =
        let user = JSON.parse(localStorage.getItem('user'));
        return {
            lang : user.locale === 'undefined' ? languages[user.locale] : languages["pl_PL"]
        }
    }

    switch(action.type){
        case "LANGUAGE_CHANGE" :
            return {
                ...state,
                lang : languages[action.payload]
            }
        default :
            return state;
    }
}