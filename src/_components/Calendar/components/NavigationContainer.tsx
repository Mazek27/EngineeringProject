import * as React from "react";
import "./styles/navigation.scss";

interface IProps {
    onClick : (date: Date) => void
}

export const NextContainer = ({onClick} : IProps) => {
    return <div className={"navigation next ico btf-arrow-right"} onClick={onClick}>

    </div>
}

export const PrevContainer = ({onClick} : IProps) => {
    return <div className={"navigation prev ico btf-arrow-left"}>

    </div>
}