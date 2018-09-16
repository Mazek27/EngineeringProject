import * as React from "react";
import {UnLoggedLayout} from "./UnLoggedLayout";
import {LoggedLayout} from "./LoggedLayout";
import {Redirect, Route} from "react-router";
import {WorkoutsPage} from "./Content/Pages/WorkoutsPage";
import {HomePage} from "./Content/Pages/HomePage";

interface IProps {
    isLogged : boolean;
    children : any[]
}

class Translator {
    constructor(){
        this.changeLanguage = this.changeLanguage.bind(this)
    }
    currentLanguage = "pl"
    changeLanguage(event : any){
        this.currentLanguage = event.target.value
    }
}
const defaultValue = new Translator()

export const LanguageContext = React.createContext(defaultValue)

export const MainLayout = ({isLogged, children} : IProps) => {
    let content = isLogged ?
        (
            <LoggedLayout>
                <Route exact path={"/"}>
                    <Redirect to={"/home"}/>
                </Route>
                <Route path={"/home"} component={HomePage}/>

                <Route  path={"/training"} component={WorkoutsPage}/>
                {/*<Route path={"/history"} component={History}/>*/}
                {children}
            </LoggedLayout>
        ) :
        (
            <UnLoggedLayout>
                {children}
            </UnLoggedLayout>
        )
    return <LanguageContext.Provider value={defaultValue}>
        {content}
    </LanguageContext.Provider>
};