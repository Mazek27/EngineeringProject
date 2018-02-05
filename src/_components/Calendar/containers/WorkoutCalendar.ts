import {connect} from "react-redux";
import {WorkoutCalendar} from "../components/WorkoutCalendar";

function mapStateToProps({lang} : any){
    return {
        lang : lang.lang.calendar,
        year : 2018,
        month : 2
    }
}

function mapDispatchToProps(){
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutCalendar);