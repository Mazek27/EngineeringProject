import {StoreState} from "../types";
import * as React from "react";
import {Simulate} from "react-dom/test-utils";
import {store} from "./store";

export const languages : { [key: string]: any } = {
    pl_PL: {
        loggedNavbar: {
            training: "Trening",
            history: "Historia",
            plan: "Plan Treningowy",
            statistic: "Statystyki",
            challenges: "Rywalizacje",
            roads: "Trasy"
        },
        unloggedNavbar: {
            signIn: "Zaloguj",
            signOut: "Rejestracja"
        },
        loginForm: {
            header : "Zaloguj",
            username : "Nazwa Użytkownika",
            password : "Hasło",
            action : {
                login : "Zaloguj",
                cancel : "Anuluj"
            },
            feedback : {
                username : "To pole nie może być puste",
                password : "To pole nie może być puste"
            }
        }
    },
    en_US: {
        loggedNavbar: {
            training: "Training",
            history: "History",
            plan: "Training Plan",
            statistic: "Statistics",
            challenges: "Challenges",
            roads: "Roads"
        },
        unloggedNavbar: {
            signIn: "SignIn",
            signOut: "SignOut"
        },
        loginForm: {
            header : "LogIn",
            username : "User Name",
            password : "Password",
            action : {
                login : "LogIn",
                cancel : "Cancel"
            },
            feedback : {
                username : "",
                password : ""
            }
        }
    }
};




