import * as React from "react";
import {UnLoggedLayout} from "./UnLoggedLayout";
import {LoggedLayout} from "./LoggedLayout";
import {CalendarWrapper} from "../../_components/Calendar/components/CalendarWrapper";

interface IProps {
    isLogged : boolean;
    children : any[]
}

export const MainLayout = ({isLogged, children} : IProps) => {
    if(isLogged){
        return <LoggedLayout>
            {/*<MapContainer/>*/}
            <CalendarWrapper/>
            {children}
        </LoggedLayout>
    } else {
        return <UnLoggedLayout>
            {/*<MapContainer/>*/}
            <CalendarWrapper/>
            {children}
        </UnLoggedLayout>
    }
}