import {combineReducers} from "redux";
import {StoreState} from "./StoreStateTypes";
import {connectRouter} from "connected-react-router"
import {language} from "../_components/LanguageChanger/reducers/LanguageChanger";
import {session} from "../_services/session/session.reducer";
import {CalendarReducer} from "../_components/Calendar/reducers/CalendarReducer";
import {menuDrawerReducer} from "../_components/Menu/reducers/MenuDrawerReducer";

export const rootReducer = (history : any) => combineReducers<StoreState.All>({
    session,
    workouts : CalendarReducer,
    menuDrawer : menuDrawerReducer,
    lang : language,
    router: connectRouter(history)
});

export interface withRouterProps {
    history : any,
    location: any,
    match : any
}