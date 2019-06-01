import React, { Component, Fragment } from 'react'
import { Jumbotron, Container, Form, Button, Alert } from 'react-bootstrap'
import { Calendar } from 'react-calendar'
import './registration.css'
export class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = { validate: false, dateOfBirth: '', calendarValue: new Date(), showCalendar: false, gender: '' }
    }
    componentDidMount() {
        this.props.genericDispatch({ type: 'REG_VALIDATION_ERROR', data: { errorType: '', error: false, errorMsg: '' } });
        this.props.genericDispatch({ type: 'CLEAR_USER_DETAILS' });
        if (this.props.update) {
            this.props.userDetails();
        }
    }
    componentDidUpdate(prevProps) {
        if (['email', 'dateOfBirth', 'gender'].some(item => {
            return this.props.userInfo[item] !== prevProps.userInfo[item];
        })) {
            const DOB = new Date(this.props.userInfo.dateOfBirth);
            this.setState({ dateOfBirth: DOB.toLocaleDateString(), calendarValue: DOB, gender: this.props.userInfo.gender });
            this.email.value = this.props.userInfo.email;
        }
    }
    getCalndarValue = (value) => {
        this.setState({ showCalendar: false, calendarValue: value, dateOfBirth: value.toLocaleDateString() })
    }
    setGender = (e) => {
        this.setState({ gender: e.currentTarget.value })
    }
    submit = (e) => {
        e.preventDefault();
        if (!e.currentTarget.checkValidity())
            this.setState((state, props) => {
                return { validate: true }
            });
        else if (this.props.update) {
            this.props.updateUserDetails({ email: this.email.value, gender: this.state.gender, dateOfBirth: this.state.calendarValue.toJSON() });
        } else {
            this.props.regUser({ username: this.username.value, password: this.password.value, email: this.email.value, gender: this.state.gender, dateOfBirth: this.state.calendarValue.toJSON() });
        }
    }
    render() {
        return (
            <Jumbotron fluid>
                <Container className={this.props.update ? 'update-reg-details' : 'r-login-form'}>
                    <Form noValidate
                        validated={this.state.validate}
                        onSubmit={this.submit}
                        style={{ minWidth: 300 }}>
                        {this.props.register.error && <Alert variant={this.props.register.errorType}>
                            {this.props.register.errorMsg}
                        </Alert>}
                        {!this.props.update &&
                            <Fragment>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="User Name" ref={e => this.username = e} required />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" ref={e => this.password = e} required />
                                </Form.Group>
                                <Form.Group controlId="formConfirmPassword">
                                    <Form.Label>Confitm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" ref={e => this.confirmPassword = e} required />
                                </Form.Group>
                            </Fragment>
                        }
                        <div>
                            <Form.Label>Gender</Form.Label>
                        </div>
                        <div>
                            <Form.Check custom inline type='radio' label='Male' value='Male' id='reg-gender-male' required onChange={this.setGender} checked={this.state.gender === 'Male'} />
                            <Form.Check custom inline type='radio' label='Female' value='Female' id='reg-gender-female' required onChange={this.setGender} checked={this.state.gender === 'Female'} />
                        </div>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" ref={e => this.email = e} required />
                        </Form.Group>
                        <Form.Group controlId="formDateOfBirth">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="text" placeholder="Date Of Birth" value={this.state.dateOfBirth} onClick={e => this.setState({ showCalendar: true })}
                                onChange={e => this.setState({ showCalendar: true })} required />
                        </Form.Group>
                        {this.state.showCalendar && <Calendar value={this.state.calendarValue} onChange={this.getCalndarValue}></Calendar>}
                        <Button variant="primary" type="submit">
                            {this.props.update ? 'Update' : 'Register'}
                        </Button>
                    </Form>
                </Container>
            </Jumbotron>
        )
    }
}