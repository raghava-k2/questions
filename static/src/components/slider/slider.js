import React, { Component, Fragment } from 'react';
import './slider.css'
export class Slider extends Component {
    close = (e) => {
        const { onClose } = this.props;
        e.preventDefault();
        onClose();
    }
    render() {
        const { children, show = false } = this.props;
        const style = {};
        if (show) {
            delete style.transform;
        } else {
            style.transform = 'translate3d(100%, 0px, 0px)';
        }
        console.log(this, style);
        return (
            <Fragment>
                <div className="r-slider" style={style}>
                    <div className="r-slider-container">
                        {children}
                    </div>
                    <div>
                        <div className="r-cross-button">
                            <span>
                                <span className="r-cross"></span>
                                <span className="r-cross"></span>
                            </span>
                            <button tabIndex="0" onClick={this.close}>Close</button>
                        </div>
                    </div>
                </div>
                {show && <div className="r-slider-overlay" onClick={this.close}></div>}
            </Fragment>
        );
    }
}