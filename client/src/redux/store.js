import { combineReducers, applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { postReducer } from './reducers/postReducrs'

const reducer = combineReducers({ posts: postReducer })

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
