import * as React from "react";
import {UnLoggedLayout} from "./UnLoggedLayout";
import {LoggedLayout} from "./LoggedLayout";
import {CalendarWrapper} from "../../_components/Calendar/components/Wrapper";
import {Route} from "react-router";

interface IProps {
    isLogged : boolean;
    children : any[]
}

export const MainLayout = ({isLogged, children} : IProps) => {
    if(isLogged){
        return <LoggedLayout>
            <Route  path={"/training"} component={CalendarWrapper}/>
            {children}
        </LoggedLayout>
    } else {
        return <UnLoggedLayout>
            {children}
        </UnLoggedLayout>
    }
};