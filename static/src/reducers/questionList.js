const questionsList = (state = {}, action) => {
    switch (action.type) {
        case 'LIST_OF_QUESTIONS':
            return action.data;
        default:
            return state;
    }
}
const question = (state = {}, action) => {
    switch (action.type) {
        case 'QUESTION_DETAILS':
            return action.data;
        default:
            return state;
    }
}
export { questionsList, question }