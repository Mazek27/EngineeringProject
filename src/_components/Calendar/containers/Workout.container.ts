import {connect, Dispatch} from "react-redux";
import {WorkoutContainer} from "../components/WorkoutContainer";
import * as actions from "../actions/SidePanel.action";

function mapStateToProps({lang, calendar} : any){
    return {
        lang : lang.lang.calendar,
        data : calendar.data,
        // currentDate : calendar.currentDate,
        responseStatus : calendar.responseStatus
    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.SidePanelCalendarAction>){
    return {
        changeMonth : (date : Date) => dispatch(actions.dateWorkoutCalendarChange(date))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutContainer);