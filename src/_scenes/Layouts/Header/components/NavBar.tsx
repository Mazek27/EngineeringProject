import * as React from "react";
import {NavLink} from "react-router-dom";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";

interface IProps{
    children : any
}

export const NavBar = ({children} : IProps) => {
    // let {isOpen, toggle} = this.state;

    return <div>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="title" color="inherit">
                    Ferr
                </Typography>

                {children}
            </Toolbar>
        </AppBar>
        {/*<Navbar color="dark" dark expand="md">*/}
            {/*<NavbarBrand color="gray"><NavLink to={"/home"}>TumakGo</NavLink></NavbarBrand>*/}

            {/*<NavbarToggler onClick={toggle}/>*/}
            {/*<Collapse isOpen={isCollapsed} navbar>*/}
                {/*{children}*/}
            {/*</Collapse>*/}
            {/*/!*<Navbar.Collapse>*!/*/}

            {/*/!*</Navbar.Collapse>*!/*/}
        {/*</Navbar>*/}
    </div>
}