interface Login {
    type : "LOGIN"
}

interface Logout {
    type : "LOGOUT"
}

export type SessionAction = Login | Logout;

export function login(): Login{
    return {
        type : "LOGIN"
    }
}

export function logout(): Logout{
    return {
        type : "LOGOUT"
    }
}

