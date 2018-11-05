import * as React from "react";
import {Sports} from "../../../_helpers/enums/sports.enum";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import "./styles/cell.scss"
import {Link} from "react-router-dom";
import {Dispatch} from "redux";
import * as actions from "../actions/CalendarActions";
import {connect} from "react-redux";

interface IProps {
    dataSet : any,
    selectWorkout: (workoutId:number) => void
}

const typeOfDay:{[key : string]: any} = {
    p : " prev-month",
    c : "",
    n : " next-month"
};


const Cell = ({dataSet, selectWorkout} : IProps) => {
    let {key, value} = dataSet;
    return <div className={"cell"}>
        <div className={`label ${typeOfDay[value.type]}`}>
            {new Date(key).getDate()}
        </div>

        <div className={"list"}>
            <div className={"d-flex flex-wrap"}>
                {value.trainingList.map((item : any) => {
                    return (
                        <div>
                            <Link to={`/workouts/${item.id}`} className={`sport-ico ${Sports[item.type]} item`} onClick={(e) => selectWorkout(item.id)}></Link>
                        </div>
                    )
                })}
            </div>

        </div>
    </div>;
};

function mapDispatchToProps(dispatch : Dispatch<actions.CalendarActions>){
    return {
        selectWorkout : (workoutId : number) => dispatch(actions.selectWorkout(workoutId)),
    }
}

export default connect(null, mapDispatchToProps)(Cell)