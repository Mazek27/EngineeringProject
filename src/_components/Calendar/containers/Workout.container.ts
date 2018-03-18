import {connect, Dispatch} from "react-redux";
import {WorkoutContainer} from "../components/WorkoutContainer";
import * as actions from "../actions/SidePanel.action";
import {store} from "../../../_helpers/store";

function mapStateToProps({lang, calendar} : any){
    return {
        lang : lang.lang.calendar,
        data : calendar.data,
        // currentDate : calendar.currentDate,
        responseStatus : calendar.responseStatus
    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.SidePanelCalendarAction>){
    let date = store.getState().calendar.currentDate

    return {
        changeMonth: (date : Date) => dispatch(actions.workoutCalendarDateChange(date)),
        nextMonth : () => dispatch(actions.selectNextWorkoutCaledarDate(new Date(date.setMonth(date.getMonth()+1)))),
        prevMonth : () => dispatch(actions.selectPrevWorkoutCaledarDate(new Date(date.setMonth(date.getMonth()-1)))),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutContainer);