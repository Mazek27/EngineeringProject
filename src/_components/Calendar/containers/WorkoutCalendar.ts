import {connect} from "react-redux";
import {WorkoutCalendar} from "../components/WorkoutCalendar";

function mapStateToProps({lang, calendar} : any){
    return {
        lang : lang.lang.calendar,
        date : calendar.date,
        isPending : calendar.isPending
    }
}

function mapDispatchToProps(){
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutCalendar);