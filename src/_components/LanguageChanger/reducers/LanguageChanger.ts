import {languages} from "../../../_helpers/translate";
import {StoreState} from "../../../_helpers/StoreStateTypes";

const initState = {
    lang : languages["pl"]
}



export const language = (state : StoreState.Language, action : any) : StoreState.Language => {
    if(typeof state === 'undefined'){
        return initState;
    }

    switch(action.type){
        case "LANGUAGE_CHANGE" :
            return {
                lang : languages[action.payload]
            };
        default :
            return state;
    }
};