import React, { Component } from 'react';
export class SliderBody extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="r-slider-body">
                {children}
            </div>
        );
    }
}