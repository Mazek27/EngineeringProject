import {combineReducers} from "redux";
import {StoreState} from "../types";
import {navBar} from "../_scenes/Layouts/Header/reducers/navBar";
import {routerReducer} from "react-router-redux";
import {loginModal} from "../_components/Modals/reducers/LoginModal";
import {language} from "../_components/LanguageChanger/reducers/LanguageChanger";
import {session} from "./session.reducer";
import {sidePanel} from "../_components/Calendar/reducers/SidePanel.reducer";

export const rootReducer = combineReducers<StoreState.All>({
    session,
    navBar,
    loginModal,
    calendar : sidePanel,
    lang : language,
    routing: routerReducer
});