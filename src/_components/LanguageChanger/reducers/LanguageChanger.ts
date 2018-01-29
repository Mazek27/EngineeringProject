import {languages} from "../../../_helpers/translate";
import {StoreState} from "../../../types";

const initState = {
    lang : languages["pl_PL"]
}

export const language = (state : StoreState.Language, action : any) : StoreState.Language => {
    if(typeof state === 'undefined'){
        return initState;
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