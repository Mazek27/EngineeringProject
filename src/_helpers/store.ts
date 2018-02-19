import {applyMiddleware, createStore} from "redux";
import {StoreState} from "../types";
import {rootReducer} from "./redusers";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import {createLogger} from "redux-logger";


const loggerMiddleware = createLogger();

export const store = createStore<StoreState.All>(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        promiseMiddleware()
    )
);