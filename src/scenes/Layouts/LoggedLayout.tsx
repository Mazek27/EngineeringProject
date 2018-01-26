import * as React from "react";
import {LoggedNavBar} from "./Header/components/LoggedNavBar";
import {LoggedFooter} from "./Footer/components/LoggedFooter";
import {NavBar} from "./Header/components/NavBar";

export class LoggedLayout extends React.Component<{},{}>{
    render() {
        return <NavBar>
            <LoggedNavBar/>
            {this.props.children}
            <LoggedFooter/>
        </NavBar>
    }
}