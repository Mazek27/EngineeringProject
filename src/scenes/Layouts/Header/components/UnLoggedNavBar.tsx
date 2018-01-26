import * as React from "react";
import {NavLink} from "react-router-dom";
import {Button, Nav, Navbar, NavItem} from "react-bootstrap";

export const UnLoggedNavBar = () => {
    return <Navbar.Collapse>
        <Nav pullRight>
            <NavItem>
                <Button bsStyle="success" bsSize="small" block>Zarejestruj</Button>
            </NavItem>
            <NavItem>
                <Button bsStyle="default" bsSize="small" block>Zaloguj</Button>
            </NavItem>
        </Nav>
    </Navbar.Collapse>

}