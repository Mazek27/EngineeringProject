import * as React from "react";
import {Sports} from "../../../_helpers/enums/sports.enum";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import "./styles/cell.scss"
import {Link} from "react-router-dom";
import {Dispatch} from "redux";
import * as actions from "../actions/WorkoutActions";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {withRouterProps} from "../../../_helpers/redusers";

interface IProps extends withRouterProps{
    dataSet : any,
    selectWorkout: (workoutId:number) => void

}

const typeOfDay:{[key : string]: any} = {
    p : " prev-month",
    c : "",
    n : " next-month"
};


class Cell extends React.Component<IProps, any> {
    render() {
        let {history, dataSet, selectWorkout} = this.props;
        let {key, value} = dataSet;
        return (
            <div className={'cell'}>
                <div className={`label ${typeOfDay[value.type]}`}>
                    {new Date(key).getDate()}
                </div>

                <div className={"list"}>
                    <div className={"d-flex flex-wrap"}>
                        {value.trainingList.map((item: any, index: number) => {
                            return (
                                <div key={index}>
                                    <a onClick={(e) => {
                                        history.push(`/workouts/${item.id}`)
                                        selectWorkout(item.id)
                                    }} className={`sport-ico ${Sports[item.type]} item`}>
                                        {/*<Link to={`/workouts/${item.id}`} className={`sport-ico ${Sports[item.type]} item`} onClick={(e) => selectWorkout(item.id)}></Link>*/}
                                    </a>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        )
    };
}

function mapDispatchToProps(dispatch : Dispatch<actions.WorkoutActions>){
    return {
        selectWorkout : (workoutId : number) => dispatch(actions.selectWorkout(workoutId)),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Cell))