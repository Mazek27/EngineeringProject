import * as React from "react";
import WorkoutCalendar from "../containers/WorkoutCalendar";
import SidePanelCalendar from "../containers/SidePanelCalendar";

export const CalendarWrapper = () => {
    return <div className={"row"} >
        {/*SideBar*/}
        <SidePanelCalendar/>
        {/*Calendar*/}
        <WorkoutCalendar/>
    </div>
}