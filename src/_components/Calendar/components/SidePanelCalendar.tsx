import * as React from "react";
import "./styles/sidepanel.css"
import "react-toggle/style.css"
import Toggle from "react-toggle";
import {number} from "prop-types";

interface IProps{
    lang : any
    dsChecked : boolean
    dsChange : () => void
    isPending : boolean
    month: any
    year: any
    dateWorkoutCalendarChange : (e : any,  month : number, year : number ) => void
}

function generateYears(){
    let today = new Date();
    let tmp = [];
    for(let i=today.getFullYear(); i > today.getFullYear() - 10; i-- ){
        tmp.push(i);
    }
    return tmp;
}

export const SidePanelCalendar = ({lang, dsChecked, month, year, dsChange, isPending, dateWorkoutCalendarChange} : IProps) => {
    let years = generateYears();

    return <div className={"col-sm-12 col-md-3"}>
        <div className={"d-none d-md-block"}>
            <div className={"sidepanel-divider"}>
                {lang.sidepanel.layout}
            </div>
        </div>
        <div className={"d-none d-sm-block"}>
            {lang.sidepanel.dailysummary}
            <Toggle disabled={isPending} defaultChecked={dsChecked} onChange={dsChange}/>
        </div>
        <div className={"d-none d-md-block"}>
            <div className={"sidepanel-divider"}>
                {lang.sidepanel.calendar}
            </div>
        </div>
        <div className={"row"} style={{minHeight : "400px"}}>
            <select value={month} onChange={(e) => dateWorkoutCalendarChange(e, parseInt(e.target.value), year)}>
                {lang.months.map((item : any, index : number) => {
                    return <option key={index + "" + item} value={index}>{item}</option>
                })}
            </select>
            <select value={year} onChange={(e) => dateWorkoutCalendarChange(e, month, parseInt(e.target.value))}>
                {years.map((item : any, index : number) => {
                    return <option key={index + "" + item} value={index}>{item}</option>
                })}
            </select>
        </div>
    </div>
}