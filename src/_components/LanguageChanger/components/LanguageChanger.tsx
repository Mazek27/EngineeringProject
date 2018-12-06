import * as React from "react";
import {languages} from "../../../_helpers/translate";

interface IProps{
    currentLang : string
    languageChange : (e : any) => void
}

export const LanguageChanger =({currentLang, languageChange} : IProps) => {
    return <select value={currentLang} onChange={(e) => languageChange(e)}>
        {Object.keys(languages).map((item : any) => {
            return <option key={item} value={item}>{item}</option>
        })}
    </select>
}