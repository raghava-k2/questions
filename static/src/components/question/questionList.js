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
        const { questionsList, questions } = this.props;
        const { next, previous } = questions;
        e.preventDefault();
        switch (paginationType) {
            case 'previous':
                questionsList(previous.split('page=')[1]);
                break;
            case 'next':
                questionsList(next.split('page=')[1]);
                break;
            default:
                break;
        }
    }
    render() {
        const { questions } = this.props;
        const { results = [], next, previous } = questions;
        return (
            <Fragment>
                <ListGroup>
                    {results.map((question) => (
                        <ListGroup.Item action href={``} key={question['_id']}>
                            {question.title}
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