import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './header.css'
export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="light" expand="lg" fixed="top">
                    <Navbar.Brand href="/">Questions</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Form inline>
                            <Button variant="outline-dark" className='router-link'>
                                <Link to='/user/login'>Sign In</Link></Button>&nbsp;
                        <Button variant="outline-dark" className='router-link'>
                                <Link to='/user/registration'>Sign Up</Link>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}