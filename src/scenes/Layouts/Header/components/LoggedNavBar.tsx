import * as Nav from "react-bootstrap/lib/Nav";
import * as React from "react";
import {MenuItem, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const LoggedNavBar = () => {
    return <Navbar.Collapse>
        <Nav>
            <NavDropdown eventKey={3} title={"Trening"} id={"trening-nav-dropdown"}>
                <MenuItem eventKey={3.1}><NavLink to="/training">Trening</NavLink></MenuItem>
                <MenuItem eventKey={3.2}><NavLink to="/history">Historia</NavLink></MenuItem>
                <MenuItem eventKey={3.3}><NavLink to="/plan">Plan Treningowy</NavLink></MenuItem>
                <MenuItem eventKey={3.4}><NavLink to="/statistic">Statystyki</NavLink></MenuItem>
            </NavDropdown>
        </Nav>
    </Navbar.Collapse>

}