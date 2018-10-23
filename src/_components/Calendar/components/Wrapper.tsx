import * as React from "react";
import WorkoutCalendar from "../containers/Workout.container";
import SidePanelCalendar from "../containers/SidePanel.container";
import "./styles/workouts.scss"
import Grid from "@material-ui/core/es/Grid/Grid";

export const CalendarWrapper = () => {
    return <Grid container spacing={0}>
        {/*SideBar*/}
        <SidePanelCalendar/>
        {/*Calendar*/}
        <WorkoutCalendar/>
    </Grid>
}