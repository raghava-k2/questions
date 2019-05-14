import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Header from '../components/header/header';
import QuestionsList from '../components/question/questionList';
class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header {...this.props} />
                <QuestionsList {...this.props} />
            </Fragment>
        )
    }
}
const mapStateToProps = (state: any) => {
    return { questions: state.questionsList }
}
const mapDispatchToProps = (dispatch: any) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)