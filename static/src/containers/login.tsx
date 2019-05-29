import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Login from '../components/login/login';
import Loading from './loading';
import { loginUser, isUserActive } from '../actions/login';
class LoginContainer extends Component {
    render() {
        return (
            <Fragment>
                <Login {...this.props}></Login>
                <Loading></Loading>
            </Fragment>
        )
    }
}
const mapStateToProps = (state: any) => {
    return { login: state.login, headerInfo: state.headerInfo }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        loginUser: (loginInfo: any, history: any) => { dispatch(loginUser(loginInfo, history)) },
        isUserActive: () => {
            dispatch(isUserActive())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)