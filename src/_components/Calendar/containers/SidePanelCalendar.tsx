import {connect, Dispatch} from "react-redux";
import {SidePanelCalendar} from "../components/SidePanelCalendar";
import * as actions from "../actions/SidePanelCalendar";

function mapStateToProps({lang, calendar} : any){
    return {
        lang : lang.lang.calendar,
        dsChecked : calendar.dsChecked,
        month : calendar.month,
        year : calendar.year,
        isPending : calendar.isPending
    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.SidePanelCalendarAction>){
    return {
        dsChange : () => dispatch(actions.dailySummaryToggleChange()),
        dateWorkoutCalendarChange : (e : any, month : number, year : number ) => dispatch(actions.dateWorkoutCalendarChange(e, month, year)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SidePanelCalendar);