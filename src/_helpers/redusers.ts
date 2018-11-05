import {combineReducers} from "redux";
import {StoreState} from "./StoreStateTypes";
import {routerReducer} from "react-router-redux";
import {language} from "../_components/LanguageChanger/reducers/LanguageChanger";
import {session} from "../_services/session/session.reducer";
import {CalendarReducer} from "../_components/Calendar/reducers/CalendarReducer";
import {menuDrawerReducer} from "../_components/Menu/reducers/MenuDrawerReducer";

export const rootReducer = combineReducers<StoreState.All>({
    session,
    workouts : CalendarReducer,
    menuDrawer : menuDrawerReducer,
    lang : language,
    routing: routerReducer
});