import * as React from "react";
import Grid from "@material-ui/core/es/Grid/Grid";
import WorkoutMap from "../WorkoutMap/WorkoutMap";
import {withTranslation} from "../../_helpers/WithTranslate";
import {Route, withRouter} from "react-router";
import {Dispatch} from "redux";
import * as actions from "../Calendar/actions/WorkoutActions";
import {connect} from "react-redux";

export interface IProps {
    lang? : any
    workoutId? : number
    loadWorkout :(id : number) => void
}

@withTranslation()
class WorkoutPanel extends React.Component<IProps, any>{

    componentDidMount(){
        this.props.loadWorkout(this.props.workoutId)
    }

    render(){
        return (
            <Grid container>
                <WorkoutMap/>
            </Grid>
        )
    }
}


function mapStateToProps({router} : any, ownProps : any){
    return {
        workoutId : router.location.pathname.split('/')[2]
    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.WorkoutActions>){
    return {
        loadWorkout : (workoutId : number) => dispatch(actions.loadWorkout(workoutId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPanel)