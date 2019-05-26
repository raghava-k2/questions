import { combineReducers } from 'redux'
import { questionsList } from './questionList'
import { login } from './login'
import { loading } from './loading'
import { registration } from './registration'
import { headerInfo } from './header'
export default combineReducers({ questionsList, login, loading, registration, headerInfo })