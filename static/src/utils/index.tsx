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
class Util {
    static checkForKey(obj: any, key: string, defaultValue?: string) {
        if (obj.hasOwnProperty(key)) {
            if (Util.getType(obj[key]) === 'Object') {
                return Object.values(obj).join(',');
            }
            else {
                return obj[key];
            }
        }
        return defaultValue;
    }
    static getType(obj: any) {
        return obj ? obj.constructor.name : null;
    }
}
export { RouteWithSubRoutes, Util }