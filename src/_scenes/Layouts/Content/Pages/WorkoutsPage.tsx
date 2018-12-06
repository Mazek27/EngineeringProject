import {WorkoutCalendar} from "../../../../_components/Calendar/components/WorkoutCalendar";
import * as React from "react";
import WorkoutPanel from "../../../../_components/WorkoutPanel/WorkoutPanel";
import {Route} from "react-router";


export class WorkoutsPage extends React.Component {

    render(){
        return (

            <>
                <WorkoutCalendar/>
                <WorkoutPanel/>
            </>
        )
    }
}
// export const WorkoutsPage = () => {
//
// }