import createHashHistory from "history/createHashHistory";
import * as ReactDOM from "react-dom";
import * as React from "react";
import {Router, Route} from "react-router";
import {Provider} from "react-redux";
import {store, history} from "./_helpers/store";
import MainLayout from "./_scenes/Layouts/MainLayout.container";

import "./index.scss"
import {languages} from "./_helpers/translate";
import {ConnectedRouter} from "connected-react-router";



ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Route path={'/'} component={MainLayout}/>
            </ConnectedRouter>
        </Provider>,
    document.getElementById("root")
);