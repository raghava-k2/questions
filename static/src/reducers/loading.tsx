export const loading = (state: any = { status: false }, action: any) => {
    switch (action.type) {
        case 'REQ_IS_PROCESSING':
            return Object.assign({}, state, { status: action.flag });
        default:
            return state;
    }
}