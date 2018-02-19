import * as React from "react";
import "./styles/calendar.css"
import {Cell} from "./Cell";
import ReactLoading from "react-loading"
import {IResposneStatus} from "../../../_helpers/constant";
import {Response} from "../../../_helpers/Response.component";

interface IProps{
    lang : any;
    // currentDate : Date
    data : {[key : string] : any}
    responseStatus: IResposneStatus
}

interface IWorkoutData{

}



function generateDays(data : any){
    let tmp = [];

    for(let i =0; i < 42; i+=7){
        tmp.push(data.slice(i, i+7))
    }

    return tmp;
}

export class WorkoutContainer extends React.Component<IProps,{}>{
    render() {


        let {lang, data, responseStatus} = this.props;
        let displayed_days = generateDays(data);

        if(responseStatus.isRejected || responseStatus.isPending){
            return <Response isPending={responseStatus.isPending} isRejected={responseStatus.isRejected}/>
        }


        return <div className={"col-xs-12 col-md-9"}>
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
                        .map(week => {
                            return <tr>
                                {week.map((data : any) => {
                                    return <Cell dataSet={data}/>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}