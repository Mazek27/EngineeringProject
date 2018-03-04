import createHashHistory from "history/createHashHistory";
import * as ReactDOM from "react-dom";
import * as React from "react";
import {Router, Route} from "react-router";
import {Provider} from "react-redux";
import {store} from "./_helpers/store";
import MainLayout from "./_scenes/Layouts/MainLayout.container";

const history = createHashHistory();


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path={'/'} component={MainLayout}/>
        </Router>
    </Provider>,
    document.getElementById("root")
);