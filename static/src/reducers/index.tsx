import { combineReducers } from 'redux'
import { questionsList } from './questionList'
import { login } from './login'
import { loading } from './loading'
import { registration } from './registration'
export default combineReducers({ questionsList, login, loading, registration })