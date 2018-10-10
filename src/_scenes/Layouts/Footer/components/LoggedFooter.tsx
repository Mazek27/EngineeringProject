import * as React from "react";
import LanguageChanger from "../../../../_components/LanguageChanger/containers/LanguageChanger";
import "../styles/footer.scss"
import AppBar from "@material-ui/core/es/AppBar/AppBar";

export class LoggedFooter extends React.Component {
    render(){
        return (
            <div className={"footer"}>
                {/*<AppBar>*/}
                    {/*<LanguageChanger/>*/}
                {/*</AppBar>*/}
            </div>
        )
    }
}