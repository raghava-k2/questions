import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import QuestionsList from '../question/questionList';
import TableTop from '../rank/tableTop';
import './body.css'
import { AskQuestion } from '../askQuestion/askQuestion';
export default class Body extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col sm='10'>
                        <section>
                            <QuestionsList {...this.props} />
                        </section>
                    </Col>
                    <Col sm='2'>
                        <section>
                            <TableTop {...this.props} />
                        </section>
                    </Col>
                </Row>
                <AskQuestion />
            </Container>
        );
    }
}