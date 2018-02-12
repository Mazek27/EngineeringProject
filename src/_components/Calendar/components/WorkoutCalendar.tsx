import * as React from "react";
import "./styles/calendar.css"
import {CellCalendar} from "./CellCalendar";
import ReactLoading from "react-loading"

interface IProps{
    lang : any;
    date : {
        year : number;
        month : number;
    }
    isPending: boolean
}



function generateDays(date : {year : number; month: number}){
    let today = new Date(date.year, date.month, 1);
    let startDayOfWeek = new Date(date.year, date.month, 1);
    startDayOfWeek.setDate(today.getDate() - today.getDate() +1);
    let current = new Date(today.getFullYear(), today.getMonth()+1, 0)
    let prev = new Date(today.getFullYear(), today.getMonth(), 0);

    let dayList = [];

    for(let i = prev.getDate()- startDayOfWeek.getDay()+2; i <= prev.getDate(); i ++){
        dayList.push({ number :i, day: 'p'});
    }
    for(let i = 1; i <= current.getDate(); i++){
        dayList.push({ number :i, day: 'c'});
    }
    let left = dayList.length -1
    for(let i = 1; i < 42 - left; i++){
        dayList.push({ number :i, day: 'n'});
    }

    let tmp = [];

    for(let i =0; i < 42; i+=7){
        tmp.push(dayList.slice(i, i+7))
    }

    return tmp;
}

export class WorkoutCalendar extends React.Component<IProps,{}>{
    render() {


        let {lang, date, isPending} = this.props;
        let days = generateDays(date)

        if(isPending){
            return <div className={"mx-auto my-auto"}>
                <ReactLoading type={"spin"} color={'#212529'} />
            </div>
        }


        return <div className={"col-xs-12 col-md-9"}>
            <div className={"calendar"}>
                <table className={"calendar-table"} role={"grid"}>
                    <thead>
                    <tr>
                        {lang.short_days
                            .map((day: any) => {
                                return <td>{day}</td>
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {days
                        .map(week => {
                            return <tr>
                                {week.map(day => {
                                    return <CellCalendar day={day} trainings={[1,2,3,4,5,6]}/>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}