export const login = (state: any = { error: false, errorMsg: '' }, action: any) => {
    switch (action.type) {
        case 'USER_VALIDATION_ERROR':
            return Object.assign({}, state, action.data)
        default:
            return state;
    }
}