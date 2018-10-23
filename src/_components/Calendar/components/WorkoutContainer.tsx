import * as React from "react";
import "./styles/calendar.scss"
import {IResponseStatus} from "../../../_helpers/constant";
import Paper from "@material-ui/core/es/Paper/Paper";
import withStyles from "@material-ui/core/es/styles/withStyles";
import ObjectTable from "../../Table/ObjectTable";

interface IProps{
    lang : any;
    // currentDate : Date
    data : {[key : string] : any}
    responseStatus: IResponseStatus
    changeMonth : (date : Date) => void
    nextMonth : () => void
    prevMonth : () => void
    classes: any
}

const styles = (theme : any)=>  ({
    control: {
        padding: theme.spacing.unit * 2
    }
})


function generateDays(data : any){
    let tmp = [];

    for(let i =0; i < 42; i+=7){
        tmp.push(data.slice(i, i+7))
    }

    return tmp;
}

// export const WorkoutContainer = ({lang, data, responseStatus, changeMonth, nextMonth, prevMonth} : IProps) => {
//     return <Container
//         lang={lang}
//         data={data}
//         responseStatus={responseStatus}
//         changeMonth={changeMonth}
//         prevMonth={prevMonth}
//         nextMonth={nextMonth}/>
// };

class Container extends React.Component<IProps,{}>{
    componentWillMount() {
        if(this.props.data.length == 0){
            this.props.changeMonth(new Date())
        }
    }

    generateHead(days : any[]){
        return days.map((day : any) => {
                return (
                        <Paper>{day}</Paper>
                )
            })
    }

    render() {
        let {lang, data, responseStatus, prevMonth, nextMonth, classes} = this.props;
        let displayed_days = generateDays(data);

        return(
            <ObjectTable body={displayed_days} head={lang.short_days}>
            </ObjectTable>
            //{/*<Response response={responseStatus} style={"col-xs-12 col-md-9"}>*/}
            //
            //    {/*<Grid container justify='center' direction='column'>*/}
            //    {/*<Grid container direction='row' justify='center'>*/}
            //    {/*{*/}
            //    {/*lang.short_days*/}
            //    {/*.map((day : any) => {*/}
            //    {/*return (*/}
            //    {/*<Grid item className={classes.control}>*/}
            //    {/*<Paper>{day}</Paper>*/}
            //    {/*</Grid>*/}
            //    {/*)*/}
            //    {/*})*/}
            //    {/*}*/}
            //    {/*</Grid>*/}
            //    {/*{displayed_days*/}
            //    {/*.map((week) => {*/}
            //    {/*return <Grid container>*/}
            //    {/*{week.map((data : any) => {*/}
            //    {/*return <Cell dataSet={data}/>*/}
            //    {/*})}*/}
            //    {/*</Grid>*/}
            //    {/*})}*/}
            //    {/*</Grid>*/}
//
//
            //    {/*<div className={"calendar"}>*/}
            //    {/*<table className={"calendar-table"} role={"grid"}>*/}
            //    {/*<thead>*/}
            //    {/*<tr>*/}
            //    {/*{lang.short_days*/}
            //    {/*.map((day : any) => {*/}
            //    {/*return <td>{day}</td>*/}
            //    {/*})*/}
            //    {/*}*/}
            //    {/*</tr>*/}
            //    {/*</thead>*/}
            //    {/*<tbody>*/}
            //    {/*{displayed_days*/}
            //    {/*.map((week) => {*/}
            //    {/*return <tr>*/}
            //    {/*{week.map((data : any) => {*/}
            //    {/*return <Cell dataSet={data}/>*/}
            //    {/*})}*/}
            //    {/*</tr>*/}
            //    {/*})}*/}
            //    {/*</tbody>*/}
            //    {/*</table>*/}
            //    {/*</div>*/}
            //    {/*<NextContainer onClick={nextMonth}/>*/}
            //    {/*<PrevContainer onClick={prevMonth}/>*/}
//
            // </Response>
        )
    }
}
export default withStyles(styles)(Container)