import {StoreState} from "../../../types";

const initState : StoreState.Calendar = {
    responseStatus : {
        isPending : false,
        isRejected : false
    },
    dsChecked : false,
    currentDate : new Date(),
    data  : []
}

export const sidePanel = (state : StoreState.Calendar, action : any) : StoreState.Calendar => {
    if(typeof state === 'undefined') {
        return initState;
    }

    switch(action.type){
        case "DAILY_SUMMARY_TOGGLE_CHANGE" :
            return {
                ...state,
                dsChecked : !state.dsChecked
            };
        case "WORKOUT_CALENDAR_DATE_CHANGE":
            return {
                ...state,
                currentDate : action.date
            }
        case "WORKOUT_CALENDAR_DATE_CHANGE_PENDING" :
            return {
                ...state,
                responseStatus : {
                    ...state.responseStatus,
                    isPending : true,
                    isRejected : false
                }
            };
        case "WORKOUT_CALENDAR_DATE_CHANGE_FULFILLED" :
            return {
                ...state,
                responseStatus : {
                    ...state.responseStatus,
                    isPending : false,
                    isRejected : false
                },
                data : action.payload.data,
                currentDate : new Date(action.payload.date)
            };
        case "WORKOUT_CALENDAR_DATE_CHANGE_REJECTED" :
            return {
                ...state,
                responseStatus : {
                    ...state.responseStatus,
                    isPending : false,
                    isRejected : true
                },
                data : action.payload
            };
        default :
            return state;
    }
}