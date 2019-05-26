import Body from "../components/body/body";
import LoginContainer from "../containers/login";
import RegistrationContainer from "../containers/registration";
import ProfileContainer from "../containers/profile";

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
    }, {
        path: '/user/profile',
        component: ProfileContainer
    }
];
export default routes