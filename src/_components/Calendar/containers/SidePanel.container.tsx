import {connect} from "react-redux";
import SidePanel from "../components/SidePanel";
import * as actions from "../actions/CalendarActions";
import {Dispatch} from "redux";

function mapStateToProps({lang, workouts} : any){
    return {
        dsChecked : workouts.dsChecked,
        currentDate : workouts.currentDate,
        isPending : workouts.isPending
    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.CalendarActions>){
    return {
        dsChange : () => dispatch(actions.dailySummaryToggleChange()),
        workoutCalendarDateChange : (e : any, date : Date) => dispatch(actions.workoutCalendarDateChange(date)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SidePanel);