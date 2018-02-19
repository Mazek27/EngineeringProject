import * as React from "react";
import WorkoutCalendar from "../containers/Workout.container";
import SidePanelCalendar from "../containers/SidePanel.container";

export const CalendarWrapper = () => {
    return <div className={"row"} >
        {/*SideBar*/}
        <SidePanelCalendar/>
        {/*Calendar*/}
        <WorkoutCalendar/>
    </div>
}