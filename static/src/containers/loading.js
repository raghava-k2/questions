import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import Loading from '../components/loading/loading';
class LoadingContainer extends Component {
    render() {
        return (
            <Fragment>
                {this.props.loading.status && <Loading {...this.props}></Loading>}
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return { loading: state.loading }
}
export default connect(mapStateToProps)(LoadingContainer)