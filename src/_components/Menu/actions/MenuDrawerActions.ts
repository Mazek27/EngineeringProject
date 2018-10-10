interface InteractionMenuDrawer {
    type : "DRAWER_MENU_INTERACTION"
}

export function handleMenuDrawer() : InteractionMenuDrawer {
    // let store = JSON.parse(localStorage.getItem('user'));
    // store.locale = e.target.value;
    // localStorage.setItem('user', JSON.stringify(store));
    return {
        type : "DRAWER_MENU_INTERACTION"
    }
}

export type MenuDrawerActions = InteractionMenuDrawer;