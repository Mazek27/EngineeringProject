import * as React from "react";
import "./styles/cellCalendar.css"

interface IProps {
    day : any,
    trainings : any[]
}

const typeOfDay:{[key : string]: any} = {
    p : " prev-month",
    c : " ",
    n : " next-month"
}

export const CellCalendar = ({day, trainings} : IProps) => {
    return <td className={"calendar-td"}>
        <div className={"calendar-label" + typeOfDay[day.day]}>
            {day.number}
        </div>
        {/* calendar-cell */}

        <div className={"calendar-list calendar-cell"}>
            <div className={" d-flex flex-wrap"}>
                {trainings.map(item => {
                    return <div className={"sport-ico sport-running calendar-list-item"}></div>
                })}
            </div>

        </div>
    </td>;
}