import {createStore, applyMiddleware, combineReducers} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'


const userReducer = (state = { }, action) => {
  return state;
}

const reducer = combineReducers({
  user: userReducer
});

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
