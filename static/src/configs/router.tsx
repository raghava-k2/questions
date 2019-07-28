import Body from "../components/body/body";
import LoginContainer from "../containers/login";
import RegistrationContainer from "../containers/registration";
import ProfileContainer from "../containers/profile";
import CreateQuestion from "../components/createQuestion/createQuestion";

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
    }, {
        path: '/create/question',
        component: CreateQuestion
    }
];
export default routes