import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Loading from './loading';
import { Registration } from '../components/registration/registration';
import { registerUser, userDetails, updateUserDetails } from '../actions/login'
class RegistrationContainer extends Component {
    render() {
        return (
            <Fragment>
                <Registration {...this.props}></Registration>
                <Loading></Loading>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return { register: state.registration, userInfo: state.userInfo }
}
const mapDispatchToProps = (dispatch) => {
    return {
        regUser: (regInfo) => { dispatch(registerUser(regInfo)) },
        userDetails: () => { dispatch(userDetails()) },
        updateUserDetails: (info) => { dispatch(updateUserDetails(info)) },
        genericDispatch: (action) => { dispatch(action) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)