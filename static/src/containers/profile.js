import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Loading from './loading';
import { UserProfile } from '../components/profile/userProfile';
import { updatePassword } from '../actions/login';
class ProfileContainer extends Component {
    render() {
        return (
            <Fragment>
                <UserProfile {...this.props}></UserProfile>
                <Loading></Loading>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return { error: state.error }
}
const mapDispatchToProps = (dispatch) => {
    return {
        genericDispatch(action) {
            dispatch(action)
        },
        updatePassword: (info) => { dispatch(updatePassword(info)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)