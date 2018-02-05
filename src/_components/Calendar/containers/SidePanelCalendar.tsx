import {connect, Dispatch} from "react-redux";
import {SidePanelCalendar} from "../components/SidePanelCalendar";
import * as actions from "../actions/SidePanelCalendar";

function mapStateToProps({lang, calendar} : any){
    return {
        lang : lang.lang.calendar,
        dsChecked : calendar.dsChecked,

    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.SidePanelCalenadarAction>){
    return {
        dsChange: () => dispatch(actions.dailySummaryToggleChange())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SidePanelCalendar);