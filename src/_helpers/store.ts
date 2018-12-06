import {applyMiddleware, createStore} from "redux";
import {StoreState} from "./StoreStateTypes";
import {rootReducer} from "./redusers";
import promiseMiddleware from "redux-promise-middleware";
import {composeWithDevTools} from "redux-devtools-extension";
import createHashHistory from "history/createHashHistory";


// const loggerMiddleware = createLogger();
export const history = createHashHistory();

export const store = createStore<StoreState.All, any, any, any>(
    rootReducer(history),
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools(applyMiddleware(
        // loggerMiddleware,
        promiseMiddleware()
    ))
);