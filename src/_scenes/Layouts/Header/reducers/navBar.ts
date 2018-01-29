import {StoreState} from "../../../../types";

const initialState = {
    isCollapsed : true
};

export const navBar = (state : StoreState.NavBar, action : any) => {
    if(typeof state ==='undefined'){
        return initialState;
    }

    switch (action.type){
        case 'CHANGE_COLLAPSE' :
            return {
                ...state,
                isCollapsed : !state.isCollapsed
            };
        default:
            return state;
    }
};