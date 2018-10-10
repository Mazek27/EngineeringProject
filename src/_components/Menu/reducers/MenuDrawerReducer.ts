import {StoreState} from "../../../_helpers/StoreStateTypes";

export const menuDrawerReducer = (state : StoreState.MenuDrawer, action : any): StoreState.MenuDrawer => {
    if(typeof state === 'undefined'){
        return { isOpen : false};
    }

    switch(action.type){
        case "DRAWER_MENU_INTERACTION" : {
            return {
                isOpen : !state.isOpen
            }
        }
        default :
            return state
    }
}