import * as React from "react";
import {Nav} from "reactstrap";
import LanguageChanger from "../../../../_components/LanguageChanger/containers/LanguageChanger";
import "../styles/footer.scss"

export class LoggedFooter extends React.Component {
    render(){
        return (
            <div className={"footer"}>
                <Nav>
                    <LanguageChanger/>
                </Nav>
            </div>
        )
    }
}