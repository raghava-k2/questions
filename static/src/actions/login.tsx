import axios from 'axios'
export const loginUser = (loginInfo: any) => {
    return (dispatch: any, state: any) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.post('/api/v1/auth/', loginInfo).then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
        }).catch((e: any) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'USER_VALIDATION_ERROR', data: { error: true, errorMsg: e.response.data } })
        })
    }
}

export const registerUser = (regInfo: any) => {
    return (dispatch: any, state: any) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.post('/api/v1/register/', regInfo).then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
        }).catch((e: any) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'REG_VALIDATION_ERROR', data: { error: true, errorMsg: e.response.data } })
        })
    }
}