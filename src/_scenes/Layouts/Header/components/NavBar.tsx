import * as React from "react";
import {Navbar, NavbarBrand} from "reactstrap";
import NavbarToggler from "reactstrap/lib/NavbarToggler";
import Collapse from "reactstrap/lib/Collapse";
import {render} from "react-dom";

interface IProps{
    isCollapsed : boolean;
    toggle : () => void;
    children : any
}

export const NavBar = ({isCollapsed, toggle, children} : IProps) => {
    // let {isOpen, toggle} = this.state;

    return <div>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand color="gray">Ferr</NavbarBrand>

            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isCollapsed} navbar>
                {children}
            </Collapse>
            {/*<Navbar.Collapse>*/}

            {/*</Navbar.Collapse>*/}
        </Navbar>
    </div>
}