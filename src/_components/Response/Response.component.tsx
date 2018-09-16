import {IResponseStatus} from "../../_helpers/constant";
import * as React from "react";
import "../../_helpers/styles/response.scss"

interface IProps {
    response : IResponseStatus,
    style : any
    // children : any[]
}

export class Response extends React.Component<IProps, {}> {
    render(){
        let {response, children, style} = this.props;
        return (
            <div className={`response-container  ${style}`}>
                <div className={response.isPending || response.isRejected ? `response-content` : ``}>
                {children}
                </div>
                {response.isPending || response.isRejected?
                    <div className={`response mx-auto my-auto`}>
                        {response.isPending ? <div/>
                            : <div className="bug"></div>}
                    </div> :<></> }

            </div>
        )

        // return (
        //     <div className={"mx-auto my-auto"}>
        //         {response.isPending ? <ReactLoading type={"spin"} color={'#212529'} />
        //             : <div className="bug"></div>}
        //     </div>
        // )
    }

}