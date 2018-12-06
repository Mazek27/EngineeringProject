import {IResponseStatus} from "../../_helpers/constant";
import * as React from "react";
import "../../_helpers/styles/response.scss"
import Grid from "@material-ui/core/es/Grid/Grid";

interface IProps {
    response : IResponseStatus,
    style : any
    // children : any[]
}

export const isPending : IResponseStatus = {
    isPending : true,
    isRejected : false
}

export const isRejected : IResponseStatus = {
    isPending : false,
    isRejected : true
}

export const isFulfilled : IResponseStatus = {
    isPending : false,
    isRejected : false
}



export class Response extends React.Component<IProps, {}> {
    render(){
        let {response, children, style} = this.props;
        return (
            <Grid className={`response-container  ${style}`}>
                <div className={response.isPending || response.isRejected ? `response-content` : ``}>
                {children}
                </div>
                {response.isPending || response.isRejected?
                    <div className={`response mx-auto my-auto`}>
                        {response.isPending ? <div/>
                            : <div className="bug"></div>}
                    </div> :<></> }

            </Grid>
        )

        // return (
        //     <div className={"mx-auto my-auto"}>
        //         {response.isPending ? <ReactLoading type={"spin"} color={'#212529'} />
        //             : <div className="bug"></div>}
        //     </div>
        // )
    }

}