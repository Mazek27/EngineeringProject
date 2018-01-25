import createHashHistory from "history/createHashHistory";
// import {Provider} from "react-redux";
import {Store} from "redux";
// import {Router} from "react-router";
import * as ReactDOM from "react-dom";
import * as React from "react";
import {Router} from "react-router";
import {Provider} from "react-redux";
// import * as Router from "react-router";

const history = createHashHistory();

ReactDOM.render(
    <Provider store={Store}>
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