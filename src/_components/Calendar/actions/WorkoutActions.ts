import {requestGet, requestPost} from "../../../_services/endpointConnection";

interface SelectWorkout {
    type : "SELECT_WORKOUT"
    payload : Promise<any>
}

interface LoadWorkout {
    type : "LOAD_WORKOUT"
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

export type WorkoutActions = SelectWorkout | DailySummaryToggleChange | DateWorkoutCalendarChange | LoadWorkout;

export function selectWorkout(workoutId : number) : SelectWorkout {
    return {
        type: "SELECT_WORKOUT",
        payload : requestGet(`trainings/${workoutId}`)
    }
}

export function loadWorkout(workoutId : number) : LoadWorkout {
    return {
        type: "LOAD_WORKOUT",
        payload : requestGet(`trainings/${workoutId}`).then(response =>
            requestPost('trainings', JSON.stringify({
                currentDate : response[0].trainingTime
            })).then(value => {
                return {
                    data : value.data,
                    currentData : value.date,
                    selectedWorkout : response[0]
                }
            })
        )
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