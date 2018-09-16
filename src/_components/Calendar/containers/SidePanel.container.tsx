import {connect} from "react-redux";
import {SidePanel} from "../components/SidePanel";
import * as actions from "../actions/SidePanel.action";
import {Dispatch} from "redux";

function mapStateToProps({lang, calendar} : any){
    return {
        lang : lang.lang.calendar,
        dsChecked : calendar.dsChecked,
        currentDate : calendar.currentDate,
        isPending : calendar.isPending
    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.SidePanelCalendarAction>){
    return {
        dsChange : () => dispatch(actions.dailySummaryToggleChange()),
        workoutCalendarDateChange : (e : any, date : Date) => dispatch(actions.workoutCalendarDateChange(date)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SidePanel);