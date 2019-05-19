import Body from "../components/body/body";
import LoginContainer from "../containers/login";
import RegistrationContainer from "../containers/registration";

const routes = [
    {
        path: '/',
        component: Body
    }, {
        path: '/user/login',
        component: LoginContainer
    }, {
        path: '/user/registration',
        component: RegistrationContainer
    }
];
export default routes