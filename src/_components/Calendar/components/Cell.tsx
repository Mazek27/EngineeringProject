import * as React from "react";
import {Sports} from "../../../_helpers/enums/sports.enum";
import Tooltip from "material-ui/es/Tooltip";

interface IProps {
    dataSet : any
}

const typeOfDay:{[key : string]: any} = {
    p : " prev-month",
    c : "",
    n : " next-month"
};

export const Cell = ({dataSet} : IProps) => {
    let {key, value} = dataSet;
    return <td className={"cell"}>
        <div className={`label ${typeOfDay[value.type]}`}>
            {new Date(key).getDate()}
        </div>

        <div className={"list"}>
            <div className={"d-flex flex-wrap"}>
                {value.trainingList.map((item : any) => {
                    return <div>
                        <div className={`sport-ico ${Sports[item.type]} item`}></div>
                        <Tooltip title={"hello"}><div>Hello</div></Tooltip>
                    </div>
                })}
            </div>

        </div>
    </td>;
};