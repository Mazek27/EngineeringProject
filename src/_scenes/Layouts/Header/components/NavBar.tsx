import * as React from "react";
import {NavLink} from "react-router-dom";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import PagesToolBar from "../../../../_components/PagesToolBar/components/PagesToolBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/es/IconButton/IconButton";

import * as actions from "../../../../_components/Menu/actions/MenuDrawerActions";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import classNames = require("classnames");

interface IProps{
    children : any
    classes : any
    pagesToolBarIsOpen : boolean
    handleDrawerOpen : () => void
}

// const drawerWidth

const styles = {
    root: {
        flexGrow : 1
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
}

const NavBar = ({children, classes, pagesToolBarIsOpen, handleDrawerOpen} : IProps) => {
    // let {isOpen, toggle} = this.state;

    return <div>
        <AppBar position="static">
                <Toolbar variant="dense" disableGutters={!pagesToolBarIsOpen}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={(e) => handleDrawerOpen()}
                        className={classNames(classes.menuButton, pagesToolBarIsOpen && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.root}>
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

function mapStateToProps({menuDrawer} : any){
    return {
        pagesToolBarIsOpen : menuDrawer.isOpen
    }
}

function mapDispachToProps(dispatch : Dispatch<actions.MenuDrawerActions>){
    return {
        handleDrawerOpen : () => dispatch(actions.handleMenuDrawer())
    }
}

export default connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(NavBar))