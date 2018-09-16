import {applyMiddleware, createStore} from "redux";
import {StoreState} from "./StoreStateTypes";
import {rootReducer} from "./redusers";
import promiseMiddleware from "redux-promise-middleware";


// const loggerMiddleware = createLogger();

export const store = createStore<StoreState.All, any, any, any>(
    rootReducer,
    applyMiddleware(
        // loggerMiddleware,
        promiseMiddleware()
    )
);