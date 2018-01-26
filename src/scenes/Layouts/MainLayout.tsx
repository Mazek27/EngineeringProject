import * as React from "react";
import {UnLoggedLayout} from "./UnLoggedLayout";
import {LoggedLayout} from "./LoggedLayout";

export class MainLayout extends React.Component<{},{}>{
    render() {
        // if(true){
            return <LoggedLayout>
                {this.props.children}
            </LoggedLayout>
        // } else {
        //     return <UnLoggedLayout>
        //         {this.props.children}
        //     </UnLoggedLayout>
        // }
    }
}