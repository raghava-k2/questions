import React from 'react'
import { Route } from 'react-router-dom'
const RouteWithSubRoutes = (route: any) => {
    return (
        <Route
            exact
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )} />
    );
}
export { RouteWithSubRoutes }