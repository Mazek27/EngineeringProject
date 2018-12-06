import * as React from "react";
import "./styles.scss"
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import withStyles from "@material-ui/core/es/styles/withStyles";
import {Home} from "@material-ui/icons";

interface IProps {
    classes : any
}

const styles = (theme : any)=> ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
})

const HomePage = ({classes} : IProps) => {
    return (
        <>
            <Grid item xs>
                <Paper className={classes.paper}>Left</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>Center</Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper}>Right</Paper>
            </Grid>
        </>
    )
}
//@ts-ignore
export default withStyles(styles)(HomePage)