import {createStore, applyMiddleware, combineReducers} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

//action constant
const SET_USER = 'SET_USER';

//action creator
export const setUser = user => ({
  type: SET_USER,
  user,
});

//thunk
export const login = user => {
  return async dispatch => {
    try {
      const retUser = await axios.post('/auth/', user).then(res => res.data);
      dispatch(setUser(retUser));
    } catch (err) {
      console.log(err);
    }
  };
};

export const sessionLogin = ()=>{
  return async dispatch =>{
    try{
      const user = await axios.get('/auth/').then(res=>res.data)

    }catch(err){
      console.log(err)
    }
  }
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.user};
    default:
      return state;
  }
};

const reducer = combineReducers({
  user: userReducer,
});

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
