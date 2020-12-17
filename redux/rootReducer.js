import { combineReducers } from 'redux';
import { ideas } from './ideas/ideasReducers';


export const rootReducer = combineReducers({
  ideas
});
