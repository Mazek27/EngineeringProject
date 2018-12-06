import * as React from "react";
import "./styles/sidepanel.scss"
import Switch from "@material-ui/core/es/Switch/Switch";
import Grid from "@material-ui/core/es/Grid/Grid";
import withStyles from "@material-ui/core/es/styles/withStyles";
import {withTranslation} from "../../../_helpers/WithTranslate";

interface IProps{
    lang? : any
    dsChecked : boolean
    dsChange : () => void
    isPending : boolean
    currentDate : Date
    workoutCalendarDateChange : (e : any,  date : Date ) => void
    classes: any
}

function generateYears(){
    let today = new Date();
    let tmp = [];
    for(let i=today.getFullYear(); i > today.getFullYear() - 10; i-- ){
        tmp.push(i);
    }
    return tmp;
}

export const styles = ({
    root: {
        height : '100%',
        width: "fit-content"
    },
    divider: {
        padding: '3px 15px',
        fontSize: '0.625rem',
        fontWeight: 400,
        color: "#b3b3b3",
        backgroundColor: "#f2f2f2"
    }
})

@withTranslation()
class SidePanel extends React.Component<IProps, any> {
    render() {
        let {lang, dsChecked, dsChange, currentDate, isPending, workoutCalendarDateChange, classes} = this.props
        let years = generateYears();
        let currentMonth = currentDate.getMonth() + 1;
        let currentYear = currentDate.getFullYear();

        return <Grid container direction={"column"} wrap={"nowrap"} alignContent={"flex-start"} className={classes.root}
                     xs={3}>
            <Grid item className={classes.divider}>
                {lang.layout}
            </Grid>
            <Grid container wrap={"nowrap"} direction={"row"}>
                <Grid item>
                    {lang.dailysummary}
                </Grid>
                <Grid item>
                    <Switch disabled={isPending} defaultChecked={dsChecked} onChange={dsChange}/>
                </Grid>
            </Grid>
            <Grid item className={classes.divider}>
                {lang.workouts}
            </Grid>
            <Grid item>
                <select value={currentMonth}
                        onChange={(e) => workoutCalendarDateChange(e, new Date(currentYear, parseInt(e.target.value), 0))}>
                    {lang.months.map((item: any, index: number) => {
                        return <option key={index + "" + item} value={index + 1}>{item}</option>
                    })}
                </select>
                <select value={currentYear}
                        onChange={(e) => workoutCalendarDateChange(e, new Date(parseInt(e.target.value), currentMonth, 0))}>
                    {years.map((item: any, index: number) => {
                        return <option key={index + "" + item} value={item}>{item}</option>
                    })}
                </select>
            </Grid>

        </Grid>
    }

    // return <div className={"col-sm-12 col-md-3 sidepanel"}>
    //     <div className={"d-none d-md-block m-1"}>
    //         <div className={"divider"}>
    //             {lang.sidepanel.layout}
    //         </div>
    //     </div>
    //     <div className={"d-none d-sm-block m-1"}>
    //         {lang.sidepanel.dailysummary}
    //         <Switch disabled={isPending} defaultChecked={dsChecked} onChange={dsChange}/>
    //     </div>
    //     <div className={"d-none d-md-block m-1"}>
    //         <div className={"divider"}>
    //             {lang.sidepanel.workouts}
    //         </div>
    //     </div>
    //     <div className={"row m-1"}>
    //         <select value={currentMonth} onChange={(e) => workoutCalendarDateChange(e, new Date(currentYear, parseInt(e.target.value),0))}>
    //             {lang.months.map((item : any, index : number) => {
    //                 return <option key={index + "" + item} value={index+1}>{item}</option>
    //             })}
    //         </select>
    //         <select value={currentYear} onChange={(e) => workoutCalendarDateChange(e, new Date(parseInt(e.target.value), currentMonth,0))}>
    //             {years.map((item : any, index : number) => {
    //                 return <option key={index + "" + item} value={item}>{item}</option>
    //             })}
    //         </select>
    //     </div>
    // </div>
}

export default withStyles(styles)(SidePanel)