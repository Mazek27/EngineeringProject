import * as React from "react";
import "./styles/sidepanel.css"
import Toggle from "react-toggle";

interface IProps{
    lang : any
    dsChecked : boolean,
    dsChange : () => void
}

export class SidePanelCalendar extends React.Component<IProps,{}> {
    render() {
        let {lang, dsChecked, dsChange} = this.props;

        return <div className={"col-sm-12 col-md-3"}>
            <div className={"d-none d-md-block"}>
                <div className={"sidepanel-divider"}>
                    {lang.sidepanel.layout}
                </div>
            </div>
            <div className={"d-none d-sm-block"}>
                {lang.sideplanel.dailysummary}
                <Toggle defaultChecked={dsChecked} onChange={dsChange}/>
            </div>
        </div>
    }
}