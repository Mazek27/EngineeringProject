import * as React from "react";
import LoggedNavBar from "./Header/containers/LoggedNavBar";
import {LoggedFooter} from "./Footer/components/LoggedFooter";

export class LoggedLayout extends React.Component<{},{}>{
    render() {
        return <>
            <LoggedNavBar/>
                <div  className={"container-fluid"} style={{maxWidth : "1000px"}}>
                    {this.props.children}
                </div>
            <LoggedFooter/>
        </>
    }
}