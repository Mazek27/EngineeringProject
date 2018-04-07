import * as React from "react";
import "./styles/navigation.scss";

interface IProps {
    onClick : () => void
}

export const NextContainer = ({onClick} : IProps) => {
    return <div className={"navigation next ico btf-arrow-right"} onClick={(e) => onClick()}/>
}

export const PrevContainer = ({onClick} : IProps) => {
    return <div className={"navigation prev ico btf-arrow-left"} onClick={(e) => onClick()}/>
}