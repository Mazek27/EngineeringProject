import * as React from "react";
import UnLoggedNavBar from "./Header/containers/UnLoggedNavBar";
import {UnLoggedFooter} from "./Footer/components/UnLoggedFooter";

export class UnLoggedLayout extends React.Component<{},{}>{
    render() {
        return <>
            <UnLoggedNavBar/>
            <div className={"container"}>
            {this.props.children}
            </div>
            <UnLoggedFooter/>
        </>
    }
}