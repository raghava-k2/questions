import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import QuestionsList from '../question/questionList';
import TableTop from '../rank/tableTop';
import './body.css'
import { Slider, SliderHeader, SliderBody, SliderFooter } from '../slider';
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
                <button type="button" onClick={this.showManageColumns}>open</button>
                <Slider show={this.state.showSlider} onClose={e => { this.setState({ showSlider: false }) }}>
                    <SliderHeader>
                        <h1>Manage Columns</h1>
                    </SliderHeader>
                    <SliderBody>
                        <ul>
                            {Array(50).fill(0).map((item, index) => (
                                <li key={index}>{`value${index}`}</li>
                            ))}
                        </ul>
                    </SliderBody>
                    <SliderFooter>
                        <button>Close</button>
                    </SliderFooter>
                </Slider>
            </Container>
        );
    }
}