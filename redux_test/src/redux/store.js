import {createStore, applyMiddleware} from 'redux'

//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入汇总之后的reducer
import reducers from './reducers/index'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))