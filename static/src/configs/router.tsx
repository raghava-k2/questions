import Body from "../components/body/body";
import Login from "../components/login/login";

const routes = [
    {
        path: '/',
        component: Body
    },{
        path:'/user/login',
        component:Login
    }
];
export default routes