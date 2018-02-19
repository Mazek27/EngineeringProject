import * as React from "react";
import "./styles/cell.css"
import {Sports} from "../../../_helpers/enums/sports.enum";

interface IProps {
    dataSet : any
}

interface ITraining {

}

const typeOfDay:{[key : string]: any} = {
    p : " prev-month",
    c : " ",
    n : " next-month"
}

export const Cell = ({dataSet} : IProps) => {
    let {key, value} = dataSet;
//+ typeOfDay[day.date.type]}
    return <td className={"calendar-td"}>
        <div className={"calendar-label"}>
            {new Date(key).getDate()}
        </div>
        {/* calendar-cell */}

        <div className={"calendar-list calendar-cell"}>
            <div className={"d-flex flex-wrap"}>
                {value.map((item : any) => {
                    return <div className={`sport-ico ${Sports[item.type]} calendar-list-item`}></div>
                })}
            </div>

        </div>
    </td>;
}