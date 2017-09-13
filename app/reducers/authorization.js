import * as ActionType from 'actions/authorization';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
	token: 0,
	access_token: null,
	refresh_token: null,
});

function authorizationReducer(state = defaultState, action) {
	switch (action.type) {
	case ActionType.AUTHORIZE:
		// console.log('catched = '); // TODO Remove
		return state.merge({ access_token: action.payload.access_token, refresh_token: action.payload.refresh_token });

	default:
		return state;
	}
}

export default authorizationReducer;
