import {serverUrl} from "../_helpers/constant";

export function getTreningsForCurrentDate(date : any) {
    const requestOptions : RequestInit = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': null,
            'Content-Type': 'application/json-patch+json',
        },
        body: JSON.stringify({
            currentDate : date
        })
    };

    // store.dispatch()

    return fetch(`${serverUrl}trainings`, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            // store.dispatch(actions.login())
            return Promise.resolve(response.json())
        })
        .catch(error => {
            return Promise.reject(error)
        })
    // new Promise<any>(resolve =>

}