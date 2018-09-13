import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import calc from './calc';

export default combineReducers({
	routing: routerReducer,
	calc,
})
