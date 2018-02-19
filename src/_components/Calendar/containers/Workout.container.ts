import {connect} from "react-redux";
import {WorkoutContainer} from "../components/WorkoutContainer";

function mapStateToProps({lang, calendar} : any){
    return {
        lang : lang.lang.calendar,
        data : calendar.data,
        // currentDate : calendar.currentDate,
        responseStatus : calendar.responseStatus
    }
}

function mapDispatchToProps(){
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutContainer);