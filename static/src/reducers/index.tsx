import { combineReducers } from 'redux'
import { questionsList, question } from './questionList'
import { login, userInfo } from './login'
import { loading } from './loading'
import { registration } from './registration'
import { headerInfo } from './header'
import { error } from './generic'
export default combineReducers({ questionsList, question, login, loading, registration, headerInfo, userInfo, error });