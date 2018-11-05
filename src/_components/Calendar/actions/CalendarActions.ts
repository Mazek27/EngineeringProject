import {requestGet, requestPost} from "../../../_services/endpointConnection";

interface SelectWorkout {
    type : "SELECT_WORKOUT"
    payload : Promise<any>
}

interface DailySummaryToggleChange {
    type : "DAILY_SUMMARY_TOGGLE_CHANGE"
}

interface DateWorkoutCalendarChange {
    type : "WORKOUT_CALENDAR_DATE_CHANGE",
    payload: Promise<any>,
    date : Date
}

export type CalendarActions = SelectWorkout | DailySummaryToggleChange | DateWorkoutCalendarChange;

export function selectWorkout(workoutId : number) : SelectWorkout {
    return {
        type: "SELECT_WORKOUT",
        payload : requestGet(`trainings/${workoutId}`)
    }
}

export function workoutCalendarDateChange(date: Date) : DateWorkoutCalendarChange {
    return {
        type: "WORKOUT_CALENDAR_DATE_CHANGE",
        payload : requestPost('trainings', JSON.stringify({
            currentDate : date
        })),
        date : date

    }
}

export function dailySummaryToggleChange() : DailySummaryToggleChange {
    return {
        type: "DAILY_SUMMARY_TOGGLE_CHANGE"
    }
}