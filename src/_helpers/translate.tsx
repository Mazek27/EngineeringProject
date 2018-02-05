import * as React from "react";

export const languages: { [key: string]: any } = {
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
            header: "Zaloguj",
            username: "Nazwa Użytkownika",
            password: "Hasło",
            action: {
                login: "Zaloguj",
                cancel: "Anuluj"
            },
            feedback: {
                username: "To pole nie może być puste",
                password: "To pole nie może być puste"
            }
        },
        calendar: {
            sidepanel: {
                layout: "Układ strony"
            },
            short_days: [
                "Pon",
                "Wto",
                "Śro",
                "Czw",
                "Pt",
                "Sob",
                "Nd"
            ],
            long_days: [
                "Poniedziałek",
                "Wtorek",
                "Środa",
                "Czwartek",
                "Piątek",
                "Sobota",
                "Niedziela"
            ],
            months: [
                "Styczeń",
                "Luty",
                "Marzec",
                "Kwiecień",
                "Maj",
                "Czerwiec",
                "Lipiec",
                "Sierpień",
                "Wrzesień",
                "Październik",
                "Listopad",
                "Grudnień"
            ]

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
            header: "LogIn",
            username: "User Name",
            password: "Password",
            action: {
                login: "LogIn",
                cancel: "Cancel"
            },
            feedback: {
                username: "",
                password: ""
            }
        },
        calendar: {
            short_days: [
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            long_days: [
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            months: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            ]

        }
    }
};




