
interface Toggle {
    type : "CHANGE_COLLAPSE"
}

export type NavBarAction = Toggle;

export function toggle() : Toggle {
    return {
        type : "CHANGE_COLLAPSE"
    }
}