import React, { Component } from 'react';
import { Form, Container, Jumbotron, Button, Alert } from 'react-bootstrap';
import LoadingContainer from '../../containers/loading';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createQuestion } from '../../actions';
class CreateQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = { validate: false };
    }
    submit = (e) => {
        const { createQuestion } = this.props;
        e.preventDefault();
        if (!e.currentTarget.checkValidity()) {
            this.setState({ validate: true });
        } else {
            createQuestion(this.generateQuestionObject());
        }
    }
    generateQuestionObject = () => {
        const { title, problem, code, expected } = this;
        return { title: title.value, problem: problem.value, code: code.value, expected: expected.value };
    }
    render() {
        const { error = {} } = this.props;
        return (
            <Jumbotron fluid>
                <Container>
                    <Form noValidate
                        validated={this.state.validate}
                        onSubmit={this.submit}>
                        {error.showError && <Alert variant={error.errorType}>
                            {error.errorMsg}
                        </Alert>}
                        <Form.Group controlId="question-name">
                            <Form.Label>Question Title</Form.Label>
                            <Form.Control type="text" placeholder="Title of the Question..." ref={name => this.title = name} required />
                        </Form.Group>
                        <Form.Group controlId="problem-statement">
                            <Form.Label>Problem statement</Form.Label>
                            <Form.Control as="textarea" rows="3" ref={problem => this.problem = problem}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="sample-code">
                            <Form.Label>Sample Code</Form.Label>
                            <Form.Control as="textarea" rows="10" ref={code => this.code = code}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="expected-result">
                            <Form.Label>Expected-Result</Form.Label>
                            <Form.Control as="textarea" rows="3" ref={expected => this.expected = expected} />
                        </Form.Group>
                        <div className='center-align'>
                            <Button variant="primary" type="submit" size="lg" block>
                                Create
                        </Button>
                        </div>
                    </Form>
                </Container>
                <LoadingContainer></LoadingContainer>
            </Jumbotron>
        )
    }
}
const mapStateToProps = (state) => {
    return { error: state.error }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createQuestion }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion)