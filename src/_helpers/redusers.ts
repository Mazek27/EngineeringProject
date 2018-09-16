import {combineReducers} from "redux";
import {StoreState} from "./StoreStateTypes";
import {routerReducer} from "react-router-redux";
import {loginModal} from "../_components/Modals/reducers/LoginModal";
import {language} from "../_components/LanguageChanger/reducers/LanguageChanger";
import {session} from "../_services/session/session.reducer";
import {sidePanel} from "../_components/Calendar/reducers/SidePanel.reducer";

export const rootReducer = combineReducers<StoreState.All>({
    session,
    loginModal,
    calendar : sidePanel,
    lang : language,
    routing: routerReducer
});