import * as React from "react";
import LoggedNavBar from "./Header/containers/LoggedNavBar";
import {LoggedFooter} from "./Footer/components/LoggedFooter";
import "./styles.scss";
import Grid from "@material-ui/core/es/Grid/Grid";
import MenuDrawer from "../../_components/Menu/components/MenuDrawer";

const styles = {
    root: {

    }
}

export class LoggedLayout extends React.Component<{},{}>{

    // handleDrawerOpen = () => {
    //     this.setState({ open: true });
    // };
    //
    // handleDrawerClose = () => {
    //     this.setState({ open: false });
    // };

    render() {
        return (
            <>
                <LoggedNavBar />
                    <MenuDrawer />
                    <Grid container spacing={24}>
                        {this.props.children}
                    </Grid>
                <LoggedFooter/>
            </>
        )
    }
}