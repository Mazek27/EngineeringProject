import * as React from "react";
import "./styles/calendar.scss"
import {IResponseStatus} from "../../../_helpers/constant";
import Paper from "@material-ui/core/es/Paper/Paper";
import withStyles from "@material-ui/core/es/styles/withStyles";
import ObjectTable from "../../Table/ObjectTable";
import Cell from "./Cell";
import {withTranslation} from "../../../_helpers/WithTranslate";
import {Dispatch} from "redux";
import * as actions from "../actions/CalendarActions";
import {store} from "../../../_helpers/store";
import {connect} from "react-redux";

interface IProps{
    lang? : any;
    data : {[key : string] : any}
    responseStatus: IResponseStatus
    changeMonth : (date : Date) => void
    nextMonth : () => void
    prevMonth : () => void
    classes: any
}

const styles = (theme : any)=>  ({
    // control: {
    //     padding: theme.spacing.unit * 2
    // }
})

@withTranslation()
class CalendarTable extends React.Component<IProps,any>{
    componentWillMount() {
        if(this.props.data.length == 0){
            this.props.changeMonth(new Date())
        }
    }

    generateDaysElements(data : any[]){
        return data.map(dd => <Cell dataSet={dd}/>)
    }

    generateDays(data : any){
        let tmp = [];
        let components = this.generateDaysElements(data);

        for(let i =0; i < 42; i+=7){
            tmp.push(components.slice(i, i+7))
        }

        return tmp;
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
        let displayed_days = this.generateDays(data);



        return(
            <ObjectTable body={displayed_days} head={lang.short_days}>
            </ObjectTable>
        )
    }
}

function mapStateToProps({workouts} : any){
    return {
        data : workouts.data,
        responseStatus : workouts.responseStatus
    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.CalendarActions>){
    let date = store.getState().workouts.currentDate

    return {
        changeMonth: (date : Date) => dispatch(actions.workoutCalendarDateChange(date)),
        nextMonth : () => dispatch(actions.workoutCalendarDateChange(new Date(date.setMonth(date.getMonth()+1)))),
        prevMonth : () => dispatch(actions.workoutCalendarDateChange(new Date(date.setMonth(date.getMonth()-1)))),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(CalendarTable));