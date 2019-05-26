import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Header from '../components/header/header';
import { logoutUser } from '.././actions/login'
class HeaderContainer extends Component {
    render() {
        return (
            <Fragment>
                <Header {...this.props} />
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return { headerInfo: state.headerInfo }
}
const mapDispatchToProps = (dispatch) => {
    return { logoutUser: (history) => { dispatch(logoutUser(history)) } }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer))