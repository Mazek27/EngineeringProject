import * as React from "react";
import {NavLink} from "react-router-dom";
import NavBar from "../containers/NavBar";

interface IProps{
    lang : any,
    logOut : () => void
}

export const LoggedNavBar = ({lang,logOut} : IProps) => {
    return <NavBar >
        {/*<Nav className="mr-auto" navbar>*/}
            {/*<UncontrolledDropdown nav>*/}
                    {/*<DropdownToggle size="sm" nav caret>*/}
                        {/*{lang.training}*/}
                    {/*</DropdownToggle>*/}
                    {/*<DropdownMenu >*/}
                        {/*<DropdownItem >*/}
                            {/*<NavLink className="nav-link text-dark default" to="/training">{lang.training}</NavLink>*/}
                        {/*</DropdownItem>*/}
                        {/*<DropdownItem disabled>*/}
                            {/*<NavLink className="nav-link text-dark"  to="/history">{lang.history}</NavLink>*/}
                        {/*</DropdownItem>*/}
                        {/*<DropdownItem disabled>*/}
                            {/*<NavLink className="nav-link text-dark"  to="/plan">{lang.plan}</NavLink>*/}
                        {/*</DropdownItem>*/}
                        {/*<DropdownItem disabled>*/}
                            {/*<NavLink className="nav-link text-dark" to="/statistic">{lang.statistic}</NavLink>*/}
                        {/*</DropdownItem>*/}
                    {/*</DropdownMenu>*/}
                {/*</UncontrolledDropdown>*/}
            {/*</Button>*/}
        {/*</NavItem>*/}

            {/*<NavItem>*/}
                {/*/!*<Button color="default" className="p-0">*!/*/}
                {/*<NavLink className="nav-link" to="/challenges">{lang.challenges}</NavLink>*/}
                {/*/!*</Button>*!/*/}
            {/*</NavItem>*/}
            {/*<NavItem>*/}
                {/*/!*<Button color="default" className="p-0">*!/*/}
                {/*<NavLink className="nav-link" to="/roads">{lang.roads}</NavLink>*/}
                {/*/!*</Button>*!/*/}
            {/*</NavItem>*/}
        {/*</Nav>*/}
        {/*<Nav className="ml-auto" navbar>*/}
            {/*<NavItem>*/}
                {/*<NavLink className="nav-link" to={"/"} onClick={() => logOut()}>{lang.logout}</NavLink>*/}
            {/*</NavItem>*/}
        {/*</Nav>*/}
    </NavBar>

};