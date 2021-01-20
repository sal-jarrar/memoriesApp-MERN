import { combineReducers, applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { postReducer } from './reducers/postReducrs'
import authReducer from './reducers/UserRedcers'

const reducer = combineReducers({ posts: postReducer, auth: authReducer })

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
