export const login = (state: any = { error: false, errorMsg: '' }, action: any) => {
    switch (action.type) {
        case 'USER_VALIDATION_ERROR':
            return Object.assign({}, state, action.data)
        default:
            return state;
    }
}
export const userInfo = (state: any = {}, action: any) => {
    switch (action.type) {
        case 'UPDATE_USER_DETAILS':
            return Object.assign({}, state, action.data);
        case 'CLEAR_USER_DETAILS':
            return Object.assign({});
        default:
            return state;
    }
}
