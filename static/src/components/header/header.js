import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Form, Button, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './header.css'
export default class Header extends Component {
    componentDidMount() {
        this.props.isUserActive();
    }
    logout = (e) => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    render() {
        return (
            <Fragment>
                <Navbar bg="light" expand="lg" fixed="top">
                    <Navbar.Brand href="/">Questions</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Form inline>
                            {!this.props.headerInfo.isUserLoggedIn &&
                                <Fragment>
                                    <Button variant="outline-dark" className='router-link'>
                                        <Link to='/user/login'>Sign In</Link></Button>&nbsp;
                                    <Button variant="outline-dark" className='router-link'>
                                        <Link to='/user/registration'>Sign Up</Link>
                                    </Button>
                                </Fragment>
                            }
                            {this.props.headerInfo.isUserLoggedIn && <DropdownButton as={ButtonGroup} title={this.props.headerInfo.name} id="login-info">
                                <Dropdown.Item eventKey="1" onClick={e => { this.props.history.push('/user/profile') }}>Profile</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={this.logout}>Sign Out</Dropdown.Item>
                            </DropdownButton>}
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}