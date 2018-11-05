import * as React from "react";
import withStyles from "@material-ui/core/es/styles/withStyles";

interface IProps{
    classes : any
}

const drawerWidth = 240

const styles = (theme : any) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
})

class PagesToolBar extends React.Component<IProps>{
// {/*<Toolbar disableGutters={!this.state.open}>*/}
// {/*<IconButton*/}
// {/*color="inherit"*/}
// {/*aria-label="Open drawer"*/}
// {/*onClick={this.handleDrawerOpen}*/}
// {/*// className={classNames(classes.menuButton, this.state.open && classes.hide)}*/}
// {/*>*/}
// {/*<MenuIcon />*/}
// {/*</IconButton>*/}
// {/*{children}*/}
// {/*<Drawer*/}
// {/*classes={{*/}
// {/*paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)*/}
// {/*}}*/}
// {/*variant={"permanent"}*/}
// {/*open={this.state.open}>*/}
// {/*</Drawer>*/}
// {/*</Toolbar>*/}

    render(){
        let {children, classes} = this.props;
        return (
            <div>
            </div>

        )
    }
}
//@ts-ignore
export default withStyles(styles)(PagesToolBar);