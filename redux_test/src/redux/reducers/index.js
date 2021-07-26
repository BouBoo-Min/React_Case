import {combineReducers} from 'redux'
//引入为Count组件服务的reducer
import counts from './Count'
//引入为Count组件服务的reducer
import persons from './Person'

export default combineReducers({
    counts,
    persons
})