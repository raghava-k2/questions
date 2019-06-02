export const error = (state = { showError: false, errorMsg: '', errorType: 'success' }, action) => {
    switch (action.type) {
        case 'ADD_ERROR_MESSAGE':
            return Object.assign({}, state, action.data);
        case 'CLEAR_ERROR_MESSAGE':
            return Object.assign({})
        default:
            return state;
    }
}