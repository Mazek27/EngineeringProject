import {applyMiddleware, createStore} from "redux";
import {StoreState} from "./StoreStateTypes";
import {rootReducer} from "./redusers";
import promiseMiddleware from "redux-promise-middleware";
import {composeWithDevTools} from "redux-devtools-extension";


// const loggerMiddleware = createLogger();

export const store = createStore<StoreState.All, any, any, any>(
    rootReducer,
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools(applyMiddleware(
        // loggerMiddleware,
        promiseMiddleware()
    ))
);