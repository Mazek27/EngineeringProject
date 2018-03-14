import * as React from "react";
import "./styles/calendar.scss"
import {Cell} from "./Cell";
import {IResposneStatus} from "../../../_helpers/constant";
import {Response} from "../../../_helpers/Response.component";
import {NextContainer, PrevContainer} from "./NavigationContainer";

interface IProps{
    lang : any;
    // currentDate : Date
    data : {[key : string] : any}
    responseStatus: IResposneStatus
    changeMonth : (date : Date) => void
}


function generateDays(data : any){
    let tmp = [];

    for(let i =0; i < 42; i+=7){
        tmp.push(data.slice(i, i+7))
    }

    return tmp;
}

export const WorkoutContainer = ({lang, data, responseStatus, changeMonth} : IProps) => {
    return <Container
        lang={lang}
        data={data}
        responseStatus={responseStatus}
        changeMonth={changeMonth}
    />
};

class Container extends React.Component<IProps,{}>{
    componentDidMount() {
        if(this.props.data.length == 0){
            this.props.changeMonth(new Date())
        }
    }

    render() {
        let {lang, data, responseStatus, changeMonth} = this.props;
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
                <NextContainer onClick={changeMonth}/>
                <PrevContainer onClick={changeMonth}/>

            </Response>
        )
    }
}