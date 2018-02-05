import * as React from "react";
import "./styles/calendar.css"

interface IProps{
    lang : any;
    year : number;
    month : number;
}



function generateDays(year : number, month : number){
    let today = new Date(year, month, 0);
    let startDayOfWeek = new Date();
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


        let {lang} = this.props;
        let days = generateDays(2018,3)


        return <div className={"col-xs-12 col-md-9"}>
            <table className={"calendar"} role={"grid"}>
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
                                switch(day.day){
                                    case 'p' :
                                        return <td className={"prev-month"}>{day.number}</td>;
                                    case 'c' :
                                        return <td className={"curr-month"}>{day.number}</td>;
                                    case 'n' :
                                        return <td className={"next-month"}>{day.number}</td>;
                                }
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}