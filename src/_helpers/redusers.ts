import {combineReducers} from "redux";
import {StoreState} from "./StoreStateTypes";
import {routerReducer} from "react-router-redux";
import {loginFormReducer} from "../_components/Modals/reducers/LoginFormReducer";
import {language} from "../_components/LanguageChanger/reducers/LanguageChanger";
import {session} from "../_services/session/session.reducer";
import {sidePanel} from "../_components/Calendar/reducers/SidePanel.reducer";
import {menuDrawerReducer} from "../_components/Menu/reducers/MenuDrawerReducer";

export const rootReducer = combineReducers<StoreState.All>({
    session,
    calendar : sidePanel,
    menuDrawer : menuDrawerReducer,
    lang : language,
    routing: routerReducer
});