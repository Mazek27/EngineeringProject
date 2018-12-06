import * as React from "react";
import {withTranslation} from "../../../../_helpers/WithTranslate";
import {requestGet} from "../../../../_services/endpointConnection";
import ObjectTable from "../../../../_components/Table/ObjectTable";
import {Sports} from "../../../../_helpers/enums/sports.enum";
import "../../../../_helpers/fonts.css"
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import Cell from "../../../../_components/Calendar/components/Cell";
import * as actions from "../../../../_components/Calendar/actions/WorkoutActions"
import {connect} from "react-redux";
import {Dispatch} from "redux";

export interface IProps{
    lang? : any,
    selectWorkout : (workoutId : number) => void
    history : any
}

const style = (theme: any) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

@withTranslation()
class HistoryPage extends React.Component<IProps, any> {
    constructor(props : IProps){
        super(props);

        this.state = {
            rows : []
        }
    }

    componentDidMount(){
        requestGet("trainings").then(response => {
            this.setState({
                rows : response.map((record: any) => {
                    return {
                        id : record.id,
                        type : <div className={`sport-ico ${Sports[record.type]}`}></div>,
                        date : record.trainingTime,
                        distance : record.detail.distance,
                        duration : record.detail.duration / 60,
                    }

                })
            })
        })
    }


    render(){
        let {lang, selectWorkout, history} = this.props;
        let {rows} = this.state;

        return (
            <ObjectTable head={lang}>
                {rows.map((row: any) => (
                    <TableRow key={row.id} hover onClick={(e) => {
                        selectWorkout(row.id)
                        history.push(`/workouts/${row.id}`)
                    }}>
                        <TableCell component="th" scope="row">
                            {row.type}
                        </TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.distance}</TableCell>
                        <TableCell>{row.duration}</TableCell>
                    </TableRow>
                ))}
            </ObjectTable>
        )

        // return <Paper className={classes.root}>
        //     <Table className={classes.table}>
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell>{lang.type}</TableCell>
        //                 <TableCell>{lang.date}</TableCell>
        //                 <TableCell numeric>{lang.distance}</TableCell>
        //                 <TableCell numeric>{lang.duration}</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {
        //                 rows.map((row: any) => (
        //                     <TableRow key={row.id}>
        //                         <TableCell component="th" scope="row">
        //                             {row.type}
        //                         </TableCell>
        //                         <TableCell>{row.trainingTime}</TableCell>
        //                         <TableCell>{row.detail.distance}</TableCell>
        //                         <TableCell>{row.detail.duration}</TableCell>
        //                     </TableRow>
        //                 ))
        //             }
        //         </TableBody>
        //     </Table>
        // </Paper>
    }

}

function mapDispatchToProps(dispatch: Dispatch<actions.WorkoutActions>){
    return {
        selectWorkout: (workoutId : number) => dispatch(actions.selectWorkout(workoutId))
    }
}

export default connect(null,mapDispatchToProps)(HistoryPage)