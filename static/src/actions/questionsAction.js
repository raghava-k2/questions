import axios from 'axios'
export const createQuestion = (questionInfo) => {
    return (dispatch) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.post('/api/v1/question/create/', questionInfo).then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
        }).catch((e) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
        });
    }
}

export const questionsList = (pageNo = 1) => {
    return (dispatch) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.get(`/api/v1/question/create/?format=json&page=${pageNo}`).then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'LIST_OF_QUESTIONS', data: res.data });
        }).catch((e) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
        });
    }
}