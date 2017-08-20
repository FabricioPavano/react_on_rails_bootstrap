import { combineReducers } from 'redux';
import name from './nameReducer';


const appReducer = combineReducers({ name });

export default appReducer;