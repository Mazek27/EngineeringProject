import createHashHistory from "history/createHashHistory";
import * as ReactDOM from "react-dom";
import * as React from "react";
import {Router} from "react-router";
import {Provider} from "react-redux";
import {store} from "./_helpers/store";
import MainLayout from "./_scenes/Layouts/MainLayout.container";

const history = createHashHistory();


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MainLayout>

                {/*<Route path="/home" component={LayoutLab}/>*/}
                {/*<Route path="/lab3" component={Article}/>*/}
                {/*<Route path="/converter" component={Converter}/>*/}
                {/*<Route path="/calculator" component={Calculator}/>*/}
            </MainLayout>
        </Router>
    </Provider>,
    document.getElementById("root")
);