import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux';
import store from '../stores'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from '../configs/router'
import { RouteWithSubRoutes } from '../utils';
import Header from '../containers/header'
export default class Main extends Component {
    private store: Store<any> = store
    render() {
        return (
            <Provider store={this.store}>
                <Router>
                    <Header></Header>
                    <main>
                        <section>
                            {routes.map((item: any, index: number) => (
                                <RouteWithSubRoutes key={index} {...item} />
                            ))}
                        </section>
                    </main>
                </Router>
            </Provider>
        )
    }
}