import * as React from "react";
import LoggedNavBar from "./Header/containers/LoggedNavBar";
import {LoggedFooter} from "./Footer/components/LoggedFooter";

export class LoggedLayout extends React.Component<{},{}>{
    render() {
        return <div>
            <LoggedNavBar/>
            {this.props.children}
            <LoggedFooter/>
        </div>
    }
}