import React, { Component } from 'react'
import { Jumbotron, Container, Form, Button } from 'react-bootstrap';
import './login.css'
export default class Login extends Component {
    render() {
        return (
            <main>
                <section>
                    <Jumbotron fluid>
                        <Container className='r-login-form'>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="User Name" />
                                    <Form.Text className="text-muted">
                                        We'll never share your credentials with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Container>
                    </Jumbotron>
                </section>
            </main>
        );
    }
}