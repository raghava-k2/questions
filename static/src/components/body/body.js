import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import QuestionsList from '../question/questionList';
import TableTop from '../rank/tableTop';
import './body.css'
export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { showSlider: false };
    }
    showManageColumns = (e) => {
        e.preventDefault();
        this.setState({ showSlider: true })
    }
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col sm='10'>
                        <section>
                            <QuestionsList />
                        </section>
                    </Col>
                    <Col sm='2'>
                        <section>
                            <TableTop />
                        </section>
                    </Col>
                </Row>
            </Container>
        );
    }
}