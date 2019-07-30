import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { questionsList } from '../../actions';
class QuestionsList extends Component {
    componentDidMount() {
        const { questionsList } = this.props;
        questionsList();
    }
    render() {
        const { listOfQuestions } = this.props;
        return (
            <ListGroup>
                {listOfQuestions.map((question) => (
                    <ListGroup.Item action href={``} key={question['_id']}>
                        {question.title}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        )
    }
}
const mapStateToProps = (state) => {
    return { error: state.error, listOfQuestions: state.questionsList }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ questionsList }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList)