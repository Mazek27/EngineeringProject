import {store} from "../../../_helpers/store";
import * as React from "react";
import {languages} from "../../../_helpers/translate";

interface IProps{
    currentLang : string
    languageChange : (e : any) => void
}

export const LanguageChanger =({currentLang, languageChange} : IProps) => {
    console.log(Object.keys(languages));
    return <select value={currentLang} onChange={(e) => languageChange(e)}>
        {Object.keys(languages).map((item : any) => {
            return <option value={item}>{item}</option>
        })}
    </select>
}