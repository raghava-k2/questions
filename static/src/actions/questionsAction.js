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

export const questionsList = () => {
    return (dispatch) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.get('/api/v1/question/create/?format=json').then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
            dispatch({ type: 'LIST_OF_QUESTIONS', data: res.data });
        }).catch((e) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
        });
    }
}