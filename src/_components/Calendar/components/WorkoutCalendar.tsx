import * as React from "react";
import Grid from "@material-ui/core/es/Grid/Grid";

import SidePanelCalendar from "../containers/SidePanel.container";
import WorkoutCalendarTable from "./WorkoutCalendarTable";

import "./styles/workouts.scss"

export const WorkoutCalendar = () => {
    return <Grid container direction="row" wrap="nowrap" justify="center" alignItems="center" spacing={0}>
        {/*SideBar*/}
        <SidePanelCalendar/>
        {/*Calendar*/}
        <WorkoutCalendarTable/>
    </Grid>
}