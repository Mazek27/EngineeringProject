import * as React from "react";
import {UnLoggedLayout} from "./UnLoggedLayout";
import {LoggedLayout} from "./LoggedLayout";
import {store} from "../../_helpers/store";

interface IProps {
    isLogged : boolean;
    children : any[]
}

export const MainLayout = ({isLogged, children} : IProps) => {
    if(isLogged){
        return <LoggedLayout>
            {children}
        </LoggedLayout>
    } else {
        return <UnLoggedLayout>
            {children}
        </UnLoggedLayout>
    }
}