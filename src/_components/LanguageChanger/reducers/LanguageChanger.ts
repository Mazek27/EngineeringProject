import {languages} from "../../../_helpers/translate";
import {StoreState} from "../../../_helpers/StoreStateTypes";

// const initState = {
//     lang : JSON.parse(sessionStorage.getItem('user')).locale === 'undefine' ? languages["pl_PL"] : JSON.parse(sessionStorage.getItem('user')).locale
// }

function initState() {
    let user = localStorage.getItem('user');

    if(user === null){
        return {
            lang: languages["en"]
        }
    } else {
        let jsonUser = JSON.parse(user);
        return {
            lang: languages[jsonUser.locale]
        }
    }
}

export const language = (state : StoreState.Language, action : any) : StoreState.Language => {
    if(typeof state === 'undefined'){
        return initState();
    }

    switch(action.type){
        case "LANGUAGE_CHANGE" :
            return {
                ...state,
                lang : languages[action.payload]
            };
        default :
            return state;
    }
};