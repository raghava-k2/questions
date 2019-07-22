import React from 'react';
import HeaderContainer from './header';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
describe('Header container', () => {
    let headerContainer = null;
    let store = configureMockStore([thunk])({ headerInfo: {} });
    beforeEach(() => {
        headerContainer = shallow(<HeaderContainer />);
    });
    it('should able to load the component', () => {
        expect(headerContainer).not.toBeUndefined();
    });
    it('should render the Header component', () => {
        expect(headerContainer.instance()).toBeDefined();
    });
    it('should load maptoState and maptoDispatch', () => {
        headerContainer = mount(
            <Provider store={store}>
                <Router>
                    <HeaderContainer/>
                </Router>
            </Provider>
        );
        expect(headerContainer).toBeDefined();
    });
    it('should map dispatch to props', () => {
        headerContainer = mount(
            <Provider store={store}>
                <Router>
                    <HeaderContainer/>
                </Router>
            </Provider>
        );
        const expectedPropKeys = ['headerInfo'];
        expect(Object.keys(headerContainer.find('Header').props())).toEqual(expect.arrayContaining(expectedPropKeys));
    });
})