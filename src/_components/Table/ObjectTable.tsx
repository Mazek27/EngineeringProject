import * as React from "react";
import Paper from "@material-ui/core/es/Paper/Paper";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Table from "@material-ui/core/es/Table/Table";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";



export interface IProps {
    classes : any
    head : any[]
    body : any[]
}

export interface IState {

}

class ObjectTable extends React.Component<IProps, IState> {
    render(){
        let {classes, head, body} = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            {Object.values(head).map(value => (
                                <TableCell>{value}</TableCell>
                            ))}
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {body.map((row, index) => (
                            <TableRow key={index}>
                                {Object.values(row).map((cell: any) => (
                                    <TableCell className={classes.cell}>
                                        {cell}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}
const styles = (theme: any) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        tableLayout: "fixed",
        minWidth: 700,
    },
    cell:{
        padding: 4,
        '&:last-child':{
            padding: 4
        }
    }
});
//@ts-ignore
export default withStyles(styles)(ObjectTable);