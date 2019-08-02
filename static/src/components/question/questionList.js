import React, { Component, Fragment } from 'react'
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { bindActionCreators } from 'redux';
import { questionsList } from '../../actions';
class QuestionsList extends Component {
    componentDidMount() {
        const { questionsList } = this.props;
        questionsList();
    }
    fetch = (e, paginationType) => {
        e.preventDefault();
        const { questionsList, questions } = this.props;
        const { next, previous } = questions;
        switch (paginationType) {
            case 'previous':
                if (previous)
                    questionsList(previous.split('page=')[1]);
                break;
            case 'next':
                if (next)
                    questionsList(next.split('page=')[1]);
                break;
            default:
                break;
        }
    }
    showQuestionDetails = (e, questionObj) => {
        e.preventDefault();
        e.stopPropagation();
        const { history } = this.props;
        const { _id, title } = questionObj;
        history.push(`/question/${_id}/${encodeURI(title)}`);
    }
    render() {
        const { questions } = this.props;
        const { results = [], next, previous } = questions;
        return (
            <Fragment>
                <ListGroup>
                    {results.map((question) => (
                        <ListGroup.Item action key={question['_id']}>
                            <h3 onClick={e => this.showQuestionDetails(e, question)}>{question.title}</h3>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <Row>
                    <Col sm='6'>
                        <Button variant="primary" size="lg" block onClick={e => this.fetch(e, 'previous')} disabled={!previous}><FaArrowLeft /> Previous</Button>
                    </Col>
                    <Col sm='6'>
                        <Button variant="primary" size="lg" block onClick={e => this.fetch(e, 'next')} disabled={!next}>Next <FaArrowRight /></Button>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return { error: state.error, questions: state.questionsList }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ questionsList }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList)