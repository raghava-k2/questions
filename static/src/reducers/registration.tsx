export const registration = (state: any = { error: false, errorMsg: '', errorType: 'success' }, action: any) => {
    switch (action.type) {
        case 'REG_VALIDATION_ERROR':
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}