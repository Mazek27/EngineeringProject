import {StoreState} from "../../../types";

const initState : StoreState.Calendar = {
    isPending : false,
    dsChecked : false,
    date  : {
        data : [],
        month : new Date().getMonth()-1,
        year : new Date().getFullYear()
    }
}

export const sidePanelCalendar = (state : StoreState.Calendar, action : any) : StoreState.Calendar => {
    if(typeof state === 'undefined') {
        return initState;
    }

    switch(action.type){
        case "DAILY_SUMMARY_TOGGLE_CHANGE" :
            return {
                ...state,
                dsChecked : !state.dsChecked
            };
        case "WORKOUT_CALENDAR_DATE_CHANGE_PENDING" :
            return {
                ...state,
                isPending : true
                // date : {
                //     month : action.payload.type == 'm' ? action.payload.value : state.date.month,
                //     year : action.payload.type == 'y' ? action.payload.value : state.date.year,
                // }
            };
        case "WORKOUT_CALENDAR_DATE_CHANGE_FULFILLED" :
            return {
                ...state,
                isPending : false,
                date : action.payload
            };
            // case ""
        default :
            return state;
    }
}