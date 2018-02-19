import {IResposneStatus} from "./constant";
import * as React from "react";
import ReactLoading from "react-loading"
import "./styles/response.css"

export const Response = (response : IResposneStatus) => {
    return <div className={"mx-auto my-auto"}>
        {response.isPending ? <ReactLoading type={"spin"} color={'#212529'} />
            : <div className="bug"></div>}
    </div>
}