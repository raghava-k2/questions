import React, { Component } from 'react'
import { Jumbotron, Container, Form, Button } from 'react-bootstrap';
import axios from 'axios'
import './login.css'
export default class Login extends Component {
    private userName: React.RefObject<any>;
    private password: React.RefObject<any>;
    constructor(props: any) {
        super(props)
        this.userName = React.createRef();
        this.password = React.createRef();
    }
    submit = (e: any) => {
        e.preventDefault();
        console.log(e, this);
        axios.post('/api/v1/login/', {
            username: this.userName.current.value,
            password: this.password.current.value
        }).then(d => { console.log(d) }).catch(e => { console.error(e) });
    }
    render() {
        return (
            <main>
                <section>
                    <Jumbotron fluid>
                        <Container className='r-login-form'>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="User Name" ref={this.userName} />
                                    <Form.Text className="text-muted">
                                        We'll never share your credentials with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" ref={this.password} />
                                </Form.Group>
                                <Button variant="primary" type="button" onClick={this.submit}>
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