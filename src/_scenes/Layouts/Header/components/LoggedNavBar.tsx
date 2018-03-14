import * as React from "react";
import {
    Nav,
    UncontrolledDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap";
import {NavLink} from "react-router-dom";
import NavBar from "../containers/NavBar";
import NavItem from "reactstrap/lib/NavItem";

interface IProps{
    lang : any,
    logOut : () => void
}

export const LoggedNavBar = ({lang,logOut} : IProps) => {
    return <NavBar >
        <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav>
                    <DropdownToggle size="sm" nav caret>
                        {lang.training}
                    </DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem>
                            <NavLink className="nav-link default" to="/training">{lang.training}</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink className="nav-link"  to="/history">{lang.history}</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink className="nav-link"  to="/plan">{lang.plan}</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink className="nav-link" to="/statistic">{lang.statistic}</NavLink>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            {/*</Button>*/}
        {/*</NavItem>*/}

            <NavItem>
                {/*<Button color="default" className="p-0">*/}
                <NavLink className="nav-link" to="/challenges">{lang.challenges}</NavLink>
                {/*</Button>*/}
            </NavItem>
            <NavItem>
                {/*<Button color="default" className="p-0">*/}
                <NavLink className="nav-link" to="/roads">{lang.roads}</NavLink>
                {/*</Button>*/}
            </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className="nav-link" to={"/"} onClick={() => logOut()}>{lang.logout}</NavLink>
            </NavItem>
        </Nav>
    </NavBar>

};