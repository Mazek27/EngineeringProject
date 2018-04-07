import * as React from "react";
import "./styles/calendar.scss"
import {Cell} from "./Cell";
import {IResponseStatus} from "../../../_helpers/constant";
import {Response} from "../../Response/Response.component";
import {NextContainer, PrevContainer} from "./NavigationContainer";
// import {NextContainer, PrevContainer} from "./NavigationContainer";

interface IProps{
    lang : any;
    // currentDate : Date
    data : {[key : string] : any}
    responseStatus: IResponseStatus
    changeMonth : (date : Date) => void
    nextMonth : () => void
    prevMonth : () => void
}


function generateDays(data : any){
    let tmp = [];

    for(let i =0; i < 42; i+=7){
        tmp.push(data.slice(i, i+7))
    }

    return tmp;
}

export const WorkoutContainer = ({lang, data, responseStatus, changeMonth, nextMonth, prevMonth} : IProps) => {
    return <Container
        lang={lang}
        data={data}
        responseStatus={responseStatus}
        changeMonth={changeMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}/>
};

class Container extends React.Component<IProps,{}>{
    componentWillMount() {
        if(this.props.data.length == 0){
            this.props.changeMonth(new Date())
        }
    }

    render() {
        let {lang, data, responseStatus, prevMonth, nextMonth} = this.props;
        let displayed_days = generateDays(data);

        return(
            <Response response={responseStatus} style={"col-xs-12 col-md-9"}>
                <div className={"calendar"}>
                    <table className={"calendar-table"} role={"grid"}>
                        <thead>
                        <tr>
                            {lang.short_days
                                .map((day : any) => {
                                    return <td>{day}</td>
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {displayed_days
                            .map((week) => {
                                return <tr>
                                    {week.map((data : any) => {
                                        return <Cell dataSet={data}/>
                                    })}
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <NextContainer onClick={nextMonth}/>
                <PrevContainer onClick={prevMonth}/>

            </Response>
        )
    }
}