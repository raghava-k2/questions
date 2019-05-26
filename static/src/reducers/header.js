export const headerInfo = (state = { isUserLoggedIn: false, name: '' }, action) => {
    switch (action.type) {
        case 'USER_HEADER_DETAILS':
            return Object.assign({}, state, { name: action.name, isUserLoggedIn: action.flag });
        default:
            return state;
    }
}