import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import './login.css'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.userName = React.createRef();
        this.password = React.createRef();
        this.state = { validate: false }
    }
    submit = (e) => {
        e.preventDefault();
        if (!e.currentTarget.checkValidity())
            this.setState((state, props) => {
                return { validate: true }
            });
        else {
            this.props.loginUser({
                username: this.userName.current.value,
                password: this.password.current.value
            });
        }
    }
    render() {
        return (
            <main>
                <section>
                    <Jumbotron fluid>
                        <Container className='r-login-form'>
                            <Form noValidate
                                validated={this.state.validate}
                                onSubmit={this.submit}>
                                {this.props.login.error && <Alert variant='danger'>
                                    {this.props.login.errorMsg}
                                </Alert>}
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="User Name" ref={this.userName} required />
                                    <Form.Text className="text-muted">
                                        We'll never share your credentials with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" ref={this.password} required />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Button variant="primary" type="submit">
                                            Login
                                </Button>
                                    </Col>
                                    <Col>
                                        <Link to=''>Forgot Password</Link>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </Jumbotron>
                </section>
            </main>
        );
    }
}