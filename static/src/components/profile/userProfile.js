import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { ChangePassword } from '../changePassword/changePassword';
import QuestionsList from '../question/questionList';
import RegistrationContainer from '../../containers/registration'
export class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = { key: 'profile' }
    }
    render() {
        return (
            <Tabs
                id="profile-tab"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}>
                <Tab eventKey="details" title="Details">
                    <RegistrationContainer update={true}></RegistrationContainer>
                </Tab>
                <Tab eventKey="changepwd" title="Change Password">
                    <ChangePassword></ChangePassword>
                </Tab>
                <Tab eventKey="questions" title="Questions">
                    <QuestionsList></QuestionsList>
                </Tab>
            </Tabs>
        );
    }
}