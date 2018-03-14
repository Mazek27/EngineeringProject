import * as React from "react";
import "./styles/sidepanel.scss"
import "react-toggle/style.css"
import Toggle from "react-toggle";
import {number} from "prop-types";

interface IProps{
    lang : any
    dsChecked : boolean
    dsChange : () => void
    isPending : boolean
    currentDate : Date
    dateWorkoutCalendarChange : (e : any,  date : Date ) => void
}

function generateYears(){
    let today = new Date();
    let tmp = [];
    for(let i=today.getFullYear(); i > today.getFullYear() - 10; i-- ){
        tmp.push(i);
    }
    return tmp;
}

export const SidePanel = ({lang, dsChecked, dsChange, currentDate, isPending, dateWorkoutCalendarChange} : IProps) => {
    let years = generateYears();
    let currentMonth = currentDate.getMonth()+1;
    let currentYear = currentDate.getFullYear();

    return <div className={"col-sm-12 col-md-3 sidepanel"}>
        <div className={"d-none d-md-block m-1"}>
            <div className={"divider"}>
                {lang.sidepanel.layout}
            </div>
        </div>
        <div className={"d-none d-sm-block m-1"}>
            {lang.sidepanel.dailysummary}
            <Toggle disabled={isPending} defaultChecked={dsChecked} onChange={dsChange}/>
        </div>
        <div className={"d-none d-md-block m-1"}>
            <div className={"divider"}>
                {lang.sidepanel.calendar}
            </div>
        </div>
        <div className={"row m-1"}>
            <select value={currentMonth} onChange={(e) => dateWorkoutCalendarChange(e, new Date(currentYear, parseInt(e.target.value),0))}>
                {lang.months.map((item : any, index : number) => {
                    return <option key={index + "" + item} value={index+1}>{item}</option>
                })}
            </select>
            <select value={currentYear} onChange={(e) => dateWorkoutCalendarChange(e, new Date(parseInt(e.target.value), currentMonth,0))}>
                {years.map((item : any, index : number) => {
                    return <option key={index + "" + item} value={item}>{item}</option>
                })}
            </select>
        </div>
    </div>
}