import {connect, Dispatch} from "react-redux";
import {SidePanel} from "../components/SidePanel";
import * as actions from "../actions/SidePanel.action";

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
        dateWorkoutCalendarChange : (e : any, date : Date) => dispatch(actions.dateWorkoutCalendarChange(e, date)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SidePanel);