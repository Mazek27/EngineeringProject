import * as React from "react";
import LoggedNavBar from "./Header/containers/LoggedNavBar";
import {LoggedFooter} from "./Footer/components/LoggedFooter";
import "./styles.scss";
import Grid from "@material-ui/core/es/Grid/Grid";
import MenuDrawer from "../../_components/Menu/components/MenuDrawer";
import withStyles from "@material-ui/core/es/styles/withStyles";

interface IProps {
    classes : any
}

const styles = (theme:any)=> ({
    root: {
        padding: theme.spacing.unit * 2
    }
})

class LoggedLayout extends React.Component<IProps,{}>{

    // handleDrawerOpen = () => {
    //     this.setState({ open: true });
    // };
    //
    // handleDrawerClose = () => {
    //     this.setState({ open: false });
    // };

    render() {
        let {classes} = this.props

        return (
            <>
                <LoggedNavBar />
                    <MenuDrawer />
                    <Grid container className={classes.root}>
                        {this.props.children}
                    </Grid>
                <LoggedFooter/>
            </>
        )
    }
}

export default withStyles(styles)(LoggedLayout)