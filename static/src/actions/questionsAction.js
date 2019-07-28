import axios from 'axios'
export const createQuestion = (questionInfo, history) => {
    return (dispatch) => {
        dispatch({ type: 'REQ_IS_PROCESSING', flag: true });
        axios.post('/api/v1/question/create/', questionInfo).then(res => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
        }).catch((e) => {
            dispatch({ type: 'REQ_IS_PROCESSING', flag: false });
        });
    }
}