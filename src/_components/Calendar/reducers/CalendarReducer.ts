import {StoreState} from "../../../_helpers/StoreStateTypes";
import {isFulfilled, isPending, isRejected} from "../../Response/Response";

const initState : StoreState.Workouts = {
    responseStatus : {
        isPending : false,
        isRejected : false
    },
    dsChecked : false,
    currentDate : new Date(),
    data  : [],
    selectedWorkout : null
};

export const CalendarReducer = (state : StoreState.Workouts, action : any) : StoreState.Workouts => {
    if (typeof state === 'undefined') {
        return initState;
    }

    switch (action.type) {
        case "SELECT_WORKOUT_FULFILLED":
            return {
                ...state,
                responseStatus: {...isFulfilled},
                selectedWorkout: action.payload[0]
            };

        case "SELECT_WORKOUT_REJECTED":
            return {
                ...state,
                responseStatus: {...isRejected},
                selectedWorkout: null
            };

        case "DAILY_SUMMARY_TOGGLE_CHANGE" :
            return {
                ...state,
                dsChecked: !state.dsChecked
            };
        case "WORKOUT_CALENDAR_DATE_CHANGE":
            return {
                ...state,
                currentDate: action.date
            };
        case "WORKOUT_CALENDAR_DATE_CHANGE_PENDING" :
            return {
                ...state,
                responseStatus: {...isPending}
            };
        case "WORKOUT_CALENDAR_DATE_CHANGE_FULFILLED" :
            return {
                ...state,
                responseStatus: {...isFulfilled},
                data: action.payload.data,
                currentDate: new Date(action.payload.date)
            };
        case "WORKOUT_CALENDAR_DATE_CHANGE_REJECTED" :
            return {
                ...state,
                responseStatus: {...isRejected},
                data: state.data
            };
        default :
            return state;
    }
};