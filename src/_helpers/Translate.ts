import * as React from "react";

export const languages: { [key: string]: any } = {
    pl: {
        menudrawer: {
            home: "Strona Gowna",
            training: "Trening",
            history: "Historia",
            plan: "Plan Treningowy",
            statistic: "Statystyki",
            challenges: "Rywalizacje",
            roads: "Trasy",
            logout: "Wyloguj"
        },
        unloggednavbar: {
            signin: "Zaloguj",
            signout: "Rejestracja"
        },
        loginform: {
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
            ,
            remember: "Zapamiętaj"
        },
        calendar: {
            sidepanel: {
                layout: "Układ strony",
                dailysummary: "Dzienne podsumowanie",
                calendar: "Kalendarz"
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
    en: {
        menudrawer: {
            home: "Strona Gowna",
            training: "Training",
            history: "History",
            plan: "Training Plan",
            statistic: "Statistics",
            challenges: "Challenges",
            roads: "Roads",
            logout: "LogOut"
        },
        unloggednavbar: {
            signin: "SignIn",
            signout: "SignOut"
        },
        loginform: {
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
            },
            remember: "Stay logged in"
        },
        calendar: {
            sidepanel: {
                layout: "Layout",
                dailysummary: "",
                calendar: ""
            },
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




