import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Loading from './loading';
import { UserProfile } from '../components/profile/userProfile';
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
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)