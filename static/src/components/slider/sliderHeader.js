import React from 'react';
// export class SliderHeader extends Component {
//     render() {
//         const { children } = this.props;
//         return (
//             <div className="r-slider-header">
//                 {children}
//             </div>
//         );
//     }
// }
export const SliderHeader = ({ children }) => {
    return (
        <div className="r-slider-header">
            {children}
        </div>
    );
}