interface LanguageChange {
    type : "LANGUAGE_CHANGE",
    payload : string
}

export function languageChange(e : any) : LanguageChange {
    // let store = JSON.parse(localStorage.getItem('user'));
    // store.locale = e.target.value;
    // localStorage.setItem('user', JSON.stringify(store));

    return {
        type : "LANGUAGE_CHANGE",
        payload : e.target.value
    }
}

export type LanguageAction = LanguageChange;