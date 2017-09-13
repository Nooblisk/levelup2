import { combineReducers } from 'redux';
import app from 'reducers/app';
import authorization from 'reducers/authorization';

const rootReducer = combineReducers({
	app,
	authorization,
});


export default rootReducer;
