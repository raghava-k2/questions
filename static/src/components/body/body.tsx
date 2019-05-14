import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import QuestionsList from '../question/questionList';
import TableTop from '../rank/tableTop';
import './body.css'
export default class Body extends Component {
    render() {
        return (
            <main>
                <Container>
                    <Row>
                        <Col sm='6'>
                            <section>
                                <QuestionsList />
                            </section>
                        </Col>
                        <Col sm='6'>
                            <section>
                                <TableTop />
                            </section>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}