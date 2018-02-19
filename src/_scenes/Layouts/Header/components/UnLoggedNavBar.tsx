import * as React from "react";
import {NavLink} from "react-router-dom";
import NavItem from "reactstrap/lib/NavItem";
import NavBar from "../containers/NavBar";
import Nav from "reactstrap/lib/Nav";
import LoginModal from "../../../../_components/Modals/containers/LoginModal";

interface IProps {
    toggle : () => void,
    lang : any
}

export const UnLoggedNavBar = ({toggle, lang} : IProps) => {
    return <NavBar>

        <Nav className="ml-auto" navbar>
        <NavItem>
            <a className="nav-link" onClick={toggle} >{lang.signIn}</a>
        </NavItem>
        <LoginModal/>
        <NavItem>
            <NavLink className="nav-link" to="">{lang.signOut}</NavLink>
        </NavItem>
        </Nav>
    </NavBar>

}