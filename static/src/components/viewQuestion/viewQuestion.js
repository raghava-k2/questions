import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { questionDetails, genericError } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class ViewQuestion extends Component {
    componentDidMount() {
        const { questionDetails, match } = this.props;
        const { params } = match;
        questionDetails(params.id);
    }
    componentWillUnmount() {
        const { genericError } = this.props;
        genericError({ type: 'CLEAR_ERROR_MESSAGE' })
    }
    convertStringToHTMLEquivalent = (str = '') => {
        return str.replace(/\n/g, '<br>');
    }
    render() {
        const { question, error } = this.props;
        const transformedCode = this.convertStringToHTMLEquivalent(question.code)
        return (
            < Container fluid >
                {
                    error.showError && <Alert variant={error.errorType}>
                        {error.errorMsg}
                    </Alert>
                }{
                    !error.showError &&
                    <Fragment>
                        <Row>
                            <Col>
                                <h1>{question.title}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <pre>{question.problem}</pre>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <pre>{transformedCode}</pre>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <pre>{question.expected}</pre>
                            </Col>
                        </Row>
                    </Fragment>
                }
            </Container >
        )
    }
}
const mapStateToProps = (state) => {
    return { error: state.error, question: state.question };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ questionDetails, genericError }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewQuestion)