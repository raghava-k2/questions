import React, { Component } from 'react';
export class SliderFooter extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="r-slider-footer">
                {children}
            </div>
        );
    }
}