import * as React from "react";
import {UnLoggedLayout} from "./UnLoggedLayout";
import {LoggedLayout} from "./LoggedLayout";
import {Redirect, Route} from "react-router";
import {WorkoutsPage} from "./Content/Pages/WorkoutsPage";
import HomePage from "./Content/Pages/HomePage";

interface IProps {
    isLogged : boolean;
    children : any[]
}

export const MainLayout = ({isLogged, children} : IProps) => {
    return isLogged ?
        (
            <LoggedLayout>
                <Route exact path={"/"}>
                    <Redirect to={"/home"}/>
                </Route>
                <Route path={"/home"} component={HomePage}/>

                <Route path={"/training"} component={WorkoutsPage}/>
                {/*<Route path={"/history"} component={History}/>*/}
                {children}
            </LoggedLayout>
        ) :
        (
            <UnLoggedLayout>
                {children}
            </UnLoggedLayout>
        )
    // return <LanguageContext.Provider value={defaultValue}>
    //     {content}
    // </LanguageContext.Provider>
};