import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Header from '../components/header/header';
export class HeaderContainer extends Component {
    render() {
        return (
            <Fragment>
                <Header {...this.props} />
            </Fragment>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {}
}
const mapDispatchToProps = (dispatch: any) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)