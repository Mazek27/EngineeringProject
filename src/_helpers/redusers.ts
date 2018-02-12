import {combineReducers} from "redux";
import {StoreState} from "../types";
import {navBar} from "../_scenes/Layouts/Header/reducers/navBar";
import {routerReducer} from "react-router-redux";
import {loginModal} from "../_components/Modals/reducers/LoginModal";
import {language} from "../_components/LanguageChanger/reducers/LanguageChanger";
import {session} from "./session.reducer";
import {sidePanelCalendar} from "../_components/Calendar/reducers/SidePanelCalendar";

export const rootReducer = combineReducers<StoreState.All>({
    navBar,
    session,
    loginModal,
    calendar : sidePanelCalendar,
    lang : language,
    routing: routerReducer
})