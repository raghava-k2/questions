import React, { Component } from 'react'
import { Jumbotron, Container, Form, Alert, Button } from 'react-bootstrap'
export class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = { validate: false }
    }
    submit = (e) => {
        e.preventDefault();
        if (!e.currentTarget.checkValidity())
            this.setState((state, props) => {
                return { validate: true }
            });
        else {
            console.log(this)
            this.props.updatePassword({ currentPassword: this.currentPassword.value, newPassword: this.newPassword.value });
        }
    }
    render() {
        return (
            <Jumbotron fluid>
                <Container className='update-reg-details'>
                    <Form noValidate
                        validated={this.state.validate}
                        onSubmit={this.submit}
                        style={{ minWidth: 300 }}>
                        {this.props.error.showError && <Alert variant={this.props.error.errorType}>
                            {this.props.error.errorMsg}
                        </Alert>}
                        <Form.Group controlId="currentPassword">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control type="password" placeholder="Current Password" ref={e => this.currentPassword = e} required />
                        </Form.Group>
                        <Form.Group controlId="newPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="New Password" ref={e => this.newPassword = e} required />
                        </Form.Group>
                        <Form.Group controlId="confirmNewPassword">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm New Password" ref={e => this.confirmNewPassword = e} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Container>
            </Jumbotron>
        );
    }
}