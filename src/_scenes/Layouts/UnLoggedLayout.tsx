import * as React from "react";
import UnLoggedNavBar from "./Header/components/UnLoggedNavBar";
import {UnLoggedFooter} from "./Footer/components/UnLoggedFooter";

export class UnLoggedLayout extends React.Component<{},{}> {
    render() {
        return (
            <>
                <UnLoggedNavBar/>
                <div className={"container"}>
                    {this.props.children}
                </div>
                <UnLoggedFooter/>
            </>
        )
    }
}