import { combineReducers } from 'redux';
import { auth } from './auth/authReducer';


export const rootReducer = combineReducers({
  auth
});
