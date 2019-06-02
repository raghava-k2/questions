import axios from 'axios'
import { Util } from '../utils';
export const loginUser = (loginInfo: any, history: any) => {
    return (dispatch: any, state: any) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.post('/api/v1/auth/', loginInfo).then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'USER_HEADER_DETAILS', flag: true, name: loginInfo.username });
            history.push('/');
            axios.defaults.headers.common['X-CSRFToken'] = document.cookie.trim().split(';')[0].split('=')[1];
        }).catch((e: any) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'USER_VALIDATION_ERROR', data: { errorType: 'danger', error: true, errorMsg: Util.checkForKey(e.response, 'data', 'Please contact Admin') } })
        });
    }
}

export const registerUser = (regInfo: any, history: any) => {
    return (dispatch: any, state: any) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.post('/api/v1/register/', regInfo).then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            history.push('/user/login');
        }).catch((e: any) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'REG_VALIDATION_ERROR', data: { errorType: 'danger', error: true, errorMsg: Util.checkForKey(e.response, 'data', 'Please contact Admin') } })
        });
    }
}

export const userDetails = () => {
    return (dispatch: any, state: any) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.get('/api/v1/user/').then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'UPDATE_USER_DETAILS', data: res.data })
        }).catch((e: any) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'REG_VALIDATION_ERROR', data: { errorType: 'danger', error: true, errorMsg: Util.checkForKey(e.response, 'data', 'Please contact Admin') } })
        });
    }
}

export const updateUserDetails = (updatedInfo: any) => {
    return (dispatch: any, state: any) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.put('/api/v1/user/', updatedInfo).then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'REG_VALIDATION_ERROR', data: { errorType: 'success', error: true, errorMsg: Util.checkForKey(res, 'data', 'Please contact Admin') } })
        }).catch((e: any) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'REG_VALIDATION_ERROR', data: { errorType: 'danger', error: true, errorMsg: Util.checkForKey(e.response, 'data', 'Please contact Admin') } })
        });
    }
}

export const updatePassword = (updatedInfo: any) => {
    return (dispatch: any, state: any) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.put('/api/v1/chng/', updatedInfo).then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'ADD_ERROR_MESSAGE', data: { errorType: 'success', showError: true, errorMsg: Util.checkForKey(res, 'data', 'Please contact Admin') } })
        }).catch((e: any) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'ADD_ERROR_MESSAGE', data: { errorType: 'danger', showError: true, errorMsg: Util.checkForKey(e.response, 'data', 'Please contact Admin') } })
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
            delete axios.defaults.headers.common['X-CSRFToken'];
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
            axios.defaults.headers.common['X-CSRFToken'] = document.cookie.trim().split(';')[0].split('=')[1];
        }).catch((e: any) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'USER_HEADER_DETAILS', flag: false, name: '' });
        });
    }
}