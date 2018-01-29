import * as React from "react";
import {Nav} from "reactstrap";
import LanguageChanger from "../../../../_components/LanguageChanger/containers/LanguageChanger";

export class LoggedFooter extends React.Component {
    render(){
        return <Nav>
            <LanguageChanger/>
        </Nav>
    }
}