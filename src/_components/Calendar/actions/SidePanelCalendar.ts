import {getTreningsForCurrentDate} from "../../../_services/workoutCalendar.service";

interface DailySummaryToggleChange {
    type : "DAILY_SUMMARY_TOGGLE_CHANGE"
}

interface DateWorkoutCalendarChange {
    type : "WORKOUT_CALENDAR_DATE_CHANGE",
    payload: Promise<any>
}

export type SidePanelCalendarAction = DailySummaryToggleChange | DateWorkoutCalendarChange;

export function dailySummaryToggleChange() : DailySummaryToggleChange {
    return {
        type: "DAILY_SUMMARY_TOGGLE_CHANGE"
    }
}

export function dateWorkoutCalendarChange(e : any, month : number, year: number) : DateWorkoutCalendarChange {
    return {
        type: "WORKOUT_CALENDAR_DATE_CHANGE",
        payload : getTreningsForCurrentDate(month,  year)
    }
}