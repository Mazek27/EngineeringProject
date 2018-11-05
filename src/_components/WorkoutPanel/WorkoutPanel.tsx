import * as React from "react";
import Grid from "@material-ui/core/es/Grid/Grid";
import WorkoutMap from "../WorkoutMap/WorkoutMap";
import {withTranslation} from "../../_helpers/WithTranslate";
import {Route} from "react-router";

export interface IProps {
    lang? : any
}

@withTranslation()
export class WorkoutPanel extends React.Component<IProps, any>{
    render(){
        return (
            <Grid container>
                <Route path={"/workouts/:trainingId"} component={WorkoutMap}/>
            </Grid>
        )
    }
}