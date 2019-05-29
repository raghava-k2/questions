import axios from 'axios'
import { Util } from '../utils';
export const loginUser = (loginInfo: any, history: any) => {
    return (dispatch: any, state: any) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.post('/api/v1/auth/', loginInfo).then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'USER_HEADER_DETAILS', flag: true, name: loginInfo.username });
            history.push('/');
        }).catch((e: any) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'USER_VALIDATION_ERROR', data: { error: true, errorMsg: Util.checkForKey(e.response, 'data', 'Please contact Admin') } })
        });
    }
}

export const registerUser = (regInfo: any,history: any) => {
    return (dispatch: any, state: any) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.post('/api/v1/register/', regInfo).then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            history.push('/user/login');
        }).catch((e: any) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'REG_VALIDATION_ERROR', data: { error: true, errorMsg: Util.checkForKey(e.response, 'data', 'Please contact Admin') } })
        });
    }
}

export const logoutUser = (history: any) => {
    return (dispatch: any, state: any) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.get('/api/v1/logout/').then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'USER_HEADER_DETAILS', flag: false, name: '' });
            history.push('/');
        }).catch((e: any) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
        });
    }
}

export const isUserActive = () => {
    return (dispatch: any, state: any) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.get('/api/v1/isactive/').then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'USER_HEADER_DETAILS', flag: true, name: res.data });
        }).catch((e: any) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'USER_HEADER_DETAILS', flag: false, name: '' });
        });
    }
}