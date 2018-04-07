import * as React from "react";
import WorkoutCalendar from "../containers/Workout.container";
import SidePanelCalendar from "../containers/SidePanel.container";
import "./styles/workouts.scss"

export const CalendarWrapper = () => {
    return <div className={"row workouts"} >
        {/*SideBar*/}
        <SidePanelCalendar/>
        {/*Calendar*/}
        <WorkoutCalendar/>
    </div>
}