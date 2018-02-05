interface DailySummaryToggleChange {
    type : "LANGUAGE_CHANGE",
    payload : string
}

export function dailySummaryToggleChange() : DailySummaryToggleChange {
    return {
        payload: "hehe",
        type: "LANGUAGE_CHANGE"
    }
}

export type SidePanelCalenadarAction = DailySummaryToggleChange;